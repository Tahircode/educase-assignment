import { PrismaClient } from '@/app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

// create a type alias for the extended client type
type ExtendedPrismaClient = ReturnType<typeof prismaClientSingleton>;

const prismaClientSingleton = () => {
  return new PrismaClient(
    {
        datasources: {
            db: {
              url: process.env.DATABASE_URL,
            }
          }
    }
  ).$extends(withAccelerate());
};

declare global {
  var prisma: ExtendedPrismaClient | undefined;
}

const prisma: ExtendedPrismaClient = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;
