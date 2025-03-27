-- CreateTable
CREATE TABLE "mailings" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mailings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mailings_email_key" ON "mailings"("email");

-- CreateIndex
CREATE INDEX "mailings_email_idx" ON "mailings"("email");
