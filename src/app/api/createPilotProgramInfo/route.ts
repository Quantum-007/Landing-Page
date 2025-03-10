import { NextResponse } from 'next/server';
import { PiloProgramFormData } from '@/types/forms/form';

export async function POST(req: Request) {
  try {
    const formData: PiloProgramFormData = await req.json();


    console.log('Received form data for Pilot Program:', formData);

    return NextResponse.json({
      message: 'Form data received successfully',
      data: formData,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Something went wrong, ${error.message}` },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { error: 'Something went wrong, but no specific error message is available.' },
        { status: 500 },
      );
    }
  }
}
