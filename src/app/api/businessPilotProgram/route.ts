import Bugsnag from '@/lib/bugsnag';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PilotProgramFormData } from '@/types/forms/form';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData: PilotProgramFormData = await req.json();

    const newPilotProgram = await prisma.businessPilotProgramInfo.create({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        consent: formData.consent,
        industry: formData.industry,
        challenges: Array.isArray(formData.challenges) ? formData.challenges : JSON.parse(formData.challenges),
        roiTimeframe: Number(formData.roiTimeframe),
        operationSize: formData.operationSize,
        automationLevel: Number(formData.automationLevel),
        roboticSolutions: Array.isArray(formData.roboticSolutions) ? formData.roboticSolutions : JSON.parse(formData.roboticSolutions),
        currentSystems: formData.currentSystems,
        additionalNotes: formData.additionalNotes,
        specificChallenges: formData.specificChallenges,
        implementationTimeline: formData.implementationTimeline,
      },
    });

    return NextResponse.json({
      message: 'Form data received and record created successfully',
      data: newPilotProgram,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      Bugsnag.notify(error);
      return NextResponse.json(
        { error: `Something went wrong, ${error.message}` },
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


export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (id) {
      const pilotProgram = await prisma.businessPilotProgramInfo.findUnique({
        where: { id: Number(id) },
      });

      if (!pilotProgram) {
        return NextResponse.json({ error: 'Pilot program not found' }, { status: 404 });
      }

      return NextResponse.json({
        message: 'Pilot program retrieved successfully',
        data: pilotProgram,
      });
    }

    const pilotPrograms = await prisma.businessPilotProgramInfo.findMany();
    return NextResponse.json({
      message: 'Pilot programs retrieved successfully',
      data: pilotPrograms,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Failed to fetch pilot programs: ${error}` },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid or missing bussiness info ID' },
        { status: 400 }
      );
    }

    const formData: Partial<PilotProgramFormData> = await req.json();

    const updatedBusinessInfo = await prisma.businessPilotProgramInfo.update({
      where: { id: Number(id) },
      data: formData,
    });

    return NextResponse.json({
      message: 'Business Info updated successfully',
      data: updatedBusinessInfo,
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
      return NextResponse.json({ error: 'Invalid or missing ID' }, { status: 400 });
    }

    await prisma.businessPilotProgramInfo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: 'Pilot program deleted successfully',
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Failed to delete pilot program: ${error}` },
      { status: 500 },
    );
  }
}
