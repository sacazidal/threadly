-- CreateTable
CREATE TABLE "product_information" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "product_information_product_id_idx" ON "product_information"("product_id");

-- AddForeignKey
ALTER TABLE "product_information" ADD CONSTRAINT "product_information_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
