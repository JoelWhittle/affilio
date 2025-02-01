-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "metadata" JSONB;

-- DropEnum
DROP TYPE "UserRole";
