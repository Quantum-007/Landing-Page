import Bugsnag from '@/lib/bugsnag';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PilotProgramFormData } from '@/types/forms/form';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData: PilotProgramFormData = await req.json();

    const newPilotProgram = await prisma.pilotProgram.create({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        consent: formData.consent,
        industry: formData.industry,
        challenges: formData.challenges,
        roiTimeframe: formData.roiTimeframe,
        operationSize: formData.operationSize,
        currentSystems: formData.currentSystems,
        additionalNotes: formData.additionalNotes,
        automationLevel: formData.automationLevel,
        roboticSolutions: formData.roboticSolutions,
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
  }
}

export async function GET() {
  try {
    const pilotPrograms = await prisma.pilotProgram.findMany();
    return NextResponse.json(pilotPrograms);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Failed to fetch pilot programs: ${error}` },
      { status: 500 },
    );
  }
}
