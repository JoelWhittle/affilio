/*
  Warnings:

  - You are about to drop the column `image` on the `AffiliateProduct` table. All the data in the column will be lost.
  - You are about to drop the column `pageComponentId` on the `AffiliateProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AffiliateProduct" DROP CONSTRAINT "AffiliateProduct_pageComponentId_fkey";

-- AlterTable
ALTER TABLE "AffiliateProduct" DROP COLUMN "image",
DROP COLUMN "pageComponentId";

-- CreateTable
CREATE TABLE "_MediaToAffiliateProducts" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_MediaToAffiliateProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PageComponentsToAffiliateProducts" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_PageComponentsToAffiliateProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MediaToAffiliateProducts_B_index" ON "_MediaToAffiliateProducts"("B");

-- CreateIndex
CREATE INDEX "_PageComponentsToAffiliateProducts_B_index" ON "_PageComponentsToAffiliateProducts"("B");

-- AddForeignKey
ALTER TABLE "_MediaToAffiliateProducts" ADD CONSTRAINT "_MediaToAffiliateProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "AffiliateProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MediaToAffiliateProducts" ADD CONSTRAINT "_MediaToAffiliateProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageComponentsToAffiliateProducts" ADD CONSTRAINT "_PageComponentsToAffiliateProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "AffiliateProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageComponentsToAffiliateProducts" ADD CONSTRAINT "_PageComponentsToAffiliateProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "PageComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
