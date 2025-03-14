import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { GeneralInqueryFormData } from '@/types/forms/form';
import Bugsnag from '@/lib/bugsnag';

const prisma = new PrismaClient();

export async function GET_SINGLE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing inquiry ID' }, { status: 400 });
    }

    const inquiry = await prisma.generalInquiry.findUnique({
      where: { id: Number(id) },
    });

    if (!inquiry) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(inquiry);
  } catch (error: unknown) {
    if (error instanceof Error) {
      Bugsnag.notify(error);
      return NextResponse.json(
        { error: `Failed to retrieve data: ${error.message}` },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          error:
            'Something went wrong, but no specific error message is available.',
        },
        { status: 500 }
      );
    }
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing inquiry ID' }, { status: 400 });
    }

    const formData: GeneralInqueryFormData = await req.json();

    if (!formData.name || !formData.email || !formData.message || formData.consent === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message, consent' },
        { status: 400 }
      );
    }

    const updatedInquiry = await prisma.generalInquiry.update({
      where: { id: Number(id) },
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        consent: formData.consent,
        company: formData.company || '', 
      },
    });

    return NextResponse.json({
      message: 'Inquiry updated successfully',
      data: updatedInquiry,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      Bugsnag.notify(error);
      return NextResponse.json(
        { error: `Failed to update data: ${error.message}` },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          error:
            'Something went wrong, but no specific error message is available.',
        },
        { status: 500 }
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id'); 
    
    if (!id) {
      return NextResponse.json({ error: 'Missing inquiry ID' }, { status: 400 });
    }

    const deletedInquiry = await prisma.generalInquiry.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: 'Inquiry deleted successfully',
      data: deletedInquiry,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      Bugsnag.notify(error);
      return NextResponse.json(
        { error: `Failed to delete data: ${error.message}` },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          error:
            'Something went wrong, but no specific error message is available.',
        },
        { status: 500 }
      );
    }
  } finally {
    await prisma.$disconnect();
  }
  
}

export async function POST(req: Request) {
  try {
    const formData: GeneralInqueryFormData = await req.json();

    console.log('request initiated', formData)

    const newInquiry = await prisma.generalInquiry.create({
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        consent: formData.consent,
        company: formData.company || '',
      },
    });

    console.log('newInquiry', newInquiry);

    return NextResponse.json({
      message: 'Inquiry submitted successfully',
      data: newInquiry,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      Bugsnag.notify(error)
      return NextResponse.json(
        { error: `Something went wrong: ${error.message}` },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        {
          error:
            'Something went wrong, but no specific error message is available.',
        },
        { status: 500 },
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const inquiries = await prisma.generalInquiry.findMany();

    return NextResponse.json({
      message: 'Inquiries retrieved successfully',
      data: inquiries,
    });
  } catch (error: unknown) {
    console.error('Error fetching inquiries:', error);

    if (error instanceof Error) {
      Bugsnag.notify(error);
      return NextResponse.json(
        { error: `Failed to retrieve data: ${error.message}` },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: 'Something went wrong, but no specific error message is available.' },
        { status: 500 }
      );
    }
  }
}


