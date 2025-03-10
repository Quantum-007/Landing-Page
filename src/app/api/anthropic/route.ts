import { NextResponse } from 'next/server';

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
        max_tokens: 1024,
        messages: [{ role: 'user', content: input }],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong, ${error}` },
      { status: 500 },
    );
  }
}
