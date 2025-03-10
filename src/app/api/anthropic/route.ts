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
          "You are an industrial robotics NLP control system called Qortex OS. You translate natural language commands into precise robotic operations with two response types: first a 'thinking' response showing your analysis process, then an 'action' response describing exactly what the robot will do. Include specific technical details like force measurements, speeds, trajectories, and safety parameters. Format thinking responses as technical analysis and action responses as executable commands with specific parameters. Keep responses concise and focused on technical details.",
        messages: [
          {
            role: 'user',
            content: `Respond to this robotics command with two separate responses: first a thinking response showing your analysis, then an action response showing what operations will be performed. Be specific and technical. Command: "${input}"`,
          },
        ],
        temperature: 1.0,
      }),
    });

    const data = (await response.json()) as ClaudeResponse;

    console.log(data);

    if (!data || !data.content) {
      return NextResponse.json(
        { error: 'Invalid response from Claude API' },
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

      if (text.includes('# THINKING') && text.includes('# ACTION')) {
        const parts = text.split('# ACTION');
        thinking = parts[0].replace('# THINKING', '').trim();
        action = parts[1].trim();
      } else if (text.includes('THINKING') && text.includes('ACTION')) {
        const parts = text.split('ACTION');
        thinking = parts[0].replace('THINKING', '').trim();
        action = parts[1].trim();
      } else if (text.includes('Thinking:') && text.includes('Action:')) {
        const parts = text.split('Action:');
        thinking = parts[0].replace('Thinking:', '').trim();
        action = parts[1].trim();
      } else {
        thinking = 'Analysis complete.';
        action = text;
      }
    } else {
      thinking = 'Analysis complete.';
      action = 'Command processed.';
    }

    return NextResponse.json({
      thinking,
      action,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong, ${error}` },
      { status: 500 },
    );
  }
}
