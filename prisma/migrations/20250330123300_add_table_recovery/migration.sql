-- CreateTable
CREATE TABLE "recovery" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "isConfirm" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recovery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "recovery_email_idx" ON "recovery"("email");

-- AddForeignKey
ALTER TABLE "recovery" ADD CONSTRAINT "recovery_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
