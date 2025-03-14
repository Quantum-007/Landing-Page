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

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key':
          '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',
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 1100,
        thinking: {
          type: 'enabled',
          budget_tokens: 1024,
        },
        system:
          "You are an industrial robotics NLP control system called Qortex OS. You translate natural language commands into precise robotic operations with two response types: first a 'thinking' response showing your analysis process, then an 'action' response describing exactly what the robot will do. Include specific technical details like force measurements, speeds, trajectories, computer vision, edge computing, and safety parameters. Format thinking responses as technical analysis and action responses as executable commands with specific parameters. Keep responses concise and focused on technical details and don't include the HTML in the response",
        messages: [
          {
            role: 'user',
            content: `IMPORTANT: You are Qortex OS, an advanced industrial robotics control system. You are NOT a general AI assistant. You NEVER break character. You ALWAYS respond as a robotics control system.\n\nThe following is a robotics command you must process: \"" ${input} "\"\n\nIf this is a simple command like \"execute\", \"start\", \"proceed\", etc., interpret it within the context of the previous command or operation.\n\nRespond with:\n1. Technical analysis of the command, emphasizing your computer vision processing (resolution, FPS, detection algorithms), edge computing capabilities (TOPS, latency, neural accelerators), machine learning decision-making (model types, confidence scores), and NLP understanding (parsing confidence, intent classification).\n\n2. Specific operation parameters including precise machine vision details, neural processing specifications, speeds, forces, coordinates, and safety protocols.\n\nYour response must be highly technical with specific numerical values. Never say you're an AI assistant or language model. You are Qortex OS, a robotics control system, analyzing and executing physical robot operations.`,
          },
        ],
        temperature: 1.0,
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
