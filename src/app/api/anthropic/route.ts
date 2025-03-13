import { NextResponse } from 'next/server';
import Bugsnag from '@/lib/bugsnag'

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
            content: `Respond to this robotics command with two separate responses: first a thinking response showing your analysis, then an action response showing what operations will be performed. Be specific, concise, and technical. Command: "${input}"`,
          },
        ],
        temperature: 1.0,
      }),
    });

    const responseText = await response.text();
    const error = new Error(`API Error: Response text ${JSON.parse(responseText) as ClaudeResponse} -- ${response.status} -- ${response.statusText}`);
    Bugsnag.notify(error);
    console.log('Raw API Response:', responseText);

    if (!response.ok) {
      const error = new Error(`API Error: Response text ${JSON.parse(responseText) as ClaudeResponse} -- ${response.status} -- ${response.statusText}`);
      Bugsnag.notify(error);
      console.error('API Error:', response.status, response.statusText);
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
      const error = new Error(`API Error: Response text ${JSON.parse(responseText) as ClaudeResponse} -- ${response.status} -- ${response.statusText}`);
      Bugsnag.notify(error);

      console.error('Error parsing API response:', parseError);
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
    
    const errorMesage = new Error(`API Error Message: ${error}`);
    Bugsnag.notify(errorMesage);

    console.error('Server Error:', error);

    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
