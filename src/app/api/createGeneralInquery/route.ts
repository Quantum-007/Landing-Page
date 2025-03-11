import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { GeneralInqueryFormData } from '@/types/forms/form';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData: GeneralInqueryFormData = await req.json();

    const newInquiry = await prisma.generalInquiry.create({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        message: formData.message,
        consent: formData.consent,
      },
    });

    return NextResponse.json({
      message: 'Inquiry submitted successfully',
      data: newInquiry,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Something went wrong: ${error.message}` },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { error: 'Something went wrong, but no specific error message is available.' },
        { status: 500 },
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}
