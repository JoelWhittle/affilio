-- AlterTable
ALTER TABLE "AffiliateProduct" ADD COLUMN     "pageId" UUID,
ADD COLUMN     "subtitle" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "AffiliateProduct" ADD CONSTRAINT "AffiliateProduct_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE SET NULL ON UPDATE CASCADE;
