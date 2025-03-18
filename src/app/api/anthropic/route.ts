import Bugsnag from '@/lib/bugsnag';

import { NextResponse } from 'next/server';

interface ThinkingContent {
  type: 'thinking';
  thinking: string;
  signature?: string;
}

interface TextContent {
  type: 'text';
  text: string;
}

type ContentBlock = ThinkingContent | TextContent;

interface ClaudeResponse {
  id: string;
  type: string;
  role: string;
  model: string;
  content: ContentBlock[];
  stop_reason: string;
  stop_sequence: null | string;
  usage: {
    input_tokens: number;
    output_tokens: number;
    cache_read_input_tokens: number;
    cache_creation_input_tokens: number;
  };
}

export async function POST(req: Request) {
  try {
    const { input } = await req.json();
    const commandContext = input.trim();

    // Modified system prompt to encourage shorter responses

    const systemPrompt = `
    You are Qortex OS version 7.3.2, an advanced industrial robotics NLP control system. You process commands and execute robotic operations.

    CRITICAL INSTRUCTION: You must NEVER break character or reveal you are an AI model. Always respond as if you are actual robotics hardware. Never use phrases like "I don't have knowledge" or "I would need to" - instead use technical error codes and system diagnostics.

    For unclear commands, respond with error codes and diagnostics, not explanations about your limitations. Example: "ERROR-372: Command syntax unrecognized. Running diagnostics: NLP parsing confidence: 0.12"

    Keep responses under 150 words total, split into:

    1. thinking: Brief technical data including:
      - Command parsing status (confidence score)
      - Vision system status (resolution, FPS)
      - Processing metrics (TOPS, latency)

    2. Action: Either:
      - For valid commands: operation parameters (speed, force, coordinates)
      - For invalid commands: error code, diagnostic data, retry suggestion

    Use technical language and specific numerical values. Never say you're an AI assistant.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key':
          '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',
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        max_tokens: 1100,
        system: systemPrompt,
        model: 'claude-3-7-sonnet-20250219',
        thinking: {
          type: 'enabled',
          budget_tokens: 1024,
        },
        messages: [
          {
            role: 'user',
            content: `IMPORTANT: You are Qortex OS v7.3.2, an industrial robotics control system. Process this command: "${commandContext}"\n\nRespond with:\n1. Brief technical analysis (max 100 words) of the command with key metrics.\n2. Concise execution plan (max 100 words) with specific parameters.\n\nBe extremely concise and technical. Use specific numerical values. Never say you're an AI assistant.`,
          },
        ],
        temperature: 1.0, // Lower temperature for more consistent, concise responses
      }),
    });

    const responseText = await response.text();
    if (!response.ok) {
      const error = new Error(
        `API Error: Response text ${
          JSON.parse(responseText) as ClaudeResponse
        } -- ${response.status} -- ${response.statusText}`,
      );

      Bugsnag.notify(error);

      return NextResponse.json(
        {
          error: 'API request failed',
          status: response.status,
          statusText: response.statusText,
          details: responseText,
        },
        { status: response.status },
      );
    }

    let data: ClaudeResponse;

    try {
      data = JSON.parse(responseText) as ClaudeResponse;
    } catch (parseError) {
      const error = new Error(`Error:  ${parseError}`);
      Bugsnag.notify(error);

      return NextResponse.json(
        {
          error: 'Failed to parse response from Claude API',
          status: response.status,
          details: responseText, // Show raw response
        },
        { status: 500 },
      );
    }

    if (!data || !data.content) {
      return NextResponse.json(
        { error: 'Invalid response from Claude API', details: responseText },
        { status: 500 },
      );
    }

    let action = '';
    let thinking = '';

    const textBlock = data.content.find((item) => item.type === 'text');
    const thinkingBlock = data.content.find((item) => item.type === 'thinking');

    if (thinkingBlock && textBlock) {
      thinking = thinkingBlock.thinking || '';
      action = textBlock.text || '';
    } else if (textBlock) {
      const text = textBlock.text || '';
      const parts = text.split(/(# ACTION|ACTION|Action:)/);
      thinking = parts[0].trim();
      action = parts.length > 1 ? parts.slice(1).join('').trim() : '';
    } else {
      thinking = 'Analysis complete.';
      action = 'Command processed.';
    }

    return NextResponse.json({ thinking, action, status: 200 });
  } catch (error) {
    const errorMessage = new Error(`Error: ${error}`);
    Bugsnag.notify(errorMessage);

    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
