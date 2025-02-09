-- CreateEnum
CREATE TYPE "SocialMediaPlatform" AS ENUM ('Facebook', 'Twitter', 'Snapchat', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube');

-- CreateTable
CREATE TABLE "SocialMediaActivity" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "mediaId" UUID NOT NULL,
    "pageId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platform" "SocialMediaPlatform" NOT NULL,

    CONSTRAINT "SocialMediaActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportedOrganization" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "mediaId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportedOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialMediaActivity_mediaId_key" ON "SocialMediaActivity"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "SupportedOrganization_mediaId_key" ON "SupportedOrganization"("mediaId");

-- AddForeignKey
ALTER TABLE "SocialMediaActivity" ADD CONSTRAINT "SocialMediaActivity_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaActivity" ADD CONSTRAINT "SocialMediaActivity_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaActivity" ADD CONSTRAINT "SocialMediaActivity_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaActivity" ADD CONSTRAINT "SocialMediaActivity_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportedOrganization" ADD CONSTRAINT "SupportedOrganization_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportedOrganization" ADD CONSTRAINT "SupportedOrganization_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
