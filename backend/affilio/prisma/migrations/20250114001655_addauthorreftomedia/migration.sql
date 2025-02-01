/*
  Warnings:

  - A unique constraint covering the columns `[mediaId]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mediaId]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mediaId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaId` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "mediaId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "mediaId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_mediaId_key" ON "Author"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_mediaId_key" ON "BlogPost"("mediaId");

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
