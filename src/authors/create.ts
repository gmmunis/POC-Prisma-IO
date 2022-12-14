import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: "Eric Evans",
            books: {
                create: {
                    name: "Arquitetura Limpa"
                }
            },
        },
    });

    console.log(result);
}

main();