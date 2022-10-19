import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: "SRE Google",
            author_id: "9b713ef7-c7bc-4aba-bdf6-97ca658986b7",
        },
    });

    console.log(result);
}

main();