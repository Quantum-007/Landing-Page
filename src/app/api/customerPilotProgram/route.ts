import Bugsnag from '@/lib/bugsnag';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CustomerPilotProgramInfo {
  name: string;
  email: string;
  zipCode: string;
  consent: boolean;
}

export async function POST(req: Request) {
  try {
    const formData: CustomerPilotProgramInfo = await req.json();

    if (!formData.name || !formData.email || formData.consent === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, zipCode, consent' },
        { status: 400 }
      );
    }

    const newCustomer = await prisma.customerPilotProgramInfo.create({
      data: formData,
    });

    return NextResponse.json({
      message: 'Customer added successfully',
      data: newCustomer,
    });
  } catch (error) {
    Bugsnag.notify(error as Error);
    return NextResponse.json(
      { error: `Something went wrong: ${(error as Error).message}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const customers = await prisma.customerPilotProgramInfo.findMany();

    return NextResponse.json({
      message: 'Customers retrieved successfully',
      data: customers,
    });
  } catch (error) {
    Bugsnag.notify(error as Error);
    return NextResponse.json(
      { error: `Failed to retrieve data: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid or missing customer ID' },
        { status: 400 }
      );
    }

    const formData: Partial<CustomerPilotProgramInfo> = await req.json();

    const updatedCustomer = await prisma.customerPilotProgramInfo.update({
      where: { id: Number(id) },
      data: formData,
    });

    return NextResponse.json({
      message: 'Customer updated successfully',
      data: updatedCustomer,
    });
  } catch (error) {
    Bugsnag.notify(error as Error);
    return NextResponse.json(
      { error: `Failed to update data: ${(error as Error).message}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid or missing customer ID' },
        { status: 400 }
      );
    }

    const deletedCustomer = await prisma.customerPilotProgramInfo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: 'Customer deleted successfully',
      data: deletedCustomer,
    });
  } catch (error) {
    Bugsnag.notify(error as Error);
    return NextResponse.json(
      { error: `Failed to delete data: ${(error as Error).message}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
