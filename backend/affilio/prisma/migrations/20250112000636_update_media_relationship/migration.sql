/*
  Warnings:

  - You are about to drop the column `pageComponentId` on the `Media` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_pageComponentId_fkey";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "pageComponentId";

-- AlterTable
ALTER TABLE "PageComponent" ALTER COLUMN "text" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_MediaToPageComponents" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_MediaToPageComponents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MediaToPageComponents_B_index" ON "_MediaToPageComponents"("B");

-- AddForeignKey
ALTER TABLE "_MediaToPageComponents" ADD CONSTRAINT "_MediaToPageComponents_A_fkey" FOREIGN KEY ("A") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MediaToPageComponents" ADD CONSTRAINT "_MediaToPageComponents_B_fkey" FOREIGN KEY ("B") REFERENCES "PageComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
