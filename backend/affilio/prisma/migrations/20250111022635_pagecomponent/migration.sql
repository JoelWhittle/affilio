-- AlterTable
ALTER TABLE "AffiliateProduct" ADD COLUMN     "pageComponentId" UUID;

-- CreateTable
CREATE TABLE "Media" (
    "id" UUID NOT NULL,
    "src" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "altText" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "pageComponentId" UUID,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageComponent" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "metadata" JSONB,
    "pageId" UUID NOT NULL,

    CONSTRAINT "PageComponent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_pageComponentId_fkey" FOREIGN KEY ("pageComponentId") REFERENCES "PageComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageComponent" ADD CONSTRAINT "PageComponent_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AffiliateProduct" ADD CONSTRAINT "AffiliateProduct_pageComponentId_fkey" FOREIGN KEY ("pageComponentId") REFERENCES "PageComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
