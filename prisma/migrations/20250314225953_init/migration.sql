-- CreateTable
CREATE TABLE "GeneralInquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "message" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneralInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessPilotProgramInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "industry" TEXT NOT NULL,
    "challenges" TEXT[],
    "roiTimeframe" INTEGER NOT NULL,
    "operationSize" TEXT NOT NULL,
    "currentSystems" TEXT NOT NULL,
    "additionalNotes" TEXT NOT NULL,
    "automationLevel" INTEGER NOT NULL,
    "roboticSolutions" TEXT[],
    "specificChallenges" TEXT NOT NULL,
    "implementationTimeline" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessPilotProgramInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerPilotProgramInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,

    CONSTRAINT "CustomerPilotProgramInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeneralInquiry_email_key" ON "GeneralInquiry"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessPilotProgramInfo_email_key" ON "BusinessPilotProgramInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPilotProgramInfo_email_key" ON "CustomerPilotProgramInfo"("email");
