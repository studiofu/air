import { PrismaClient } from '@prisma/client';

// global scope
declare global {
    var prisma: PrismaClient | undefined;
}

// globalThis refer to global scope of this
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
