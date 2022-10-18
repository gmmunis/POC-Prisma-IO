import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de PHP",
            duration: 500,
            description: "Curso de PHP 7",
            teacher: {
                connect: {
                    id: "4d401b34-38e7-4c8f-b6b6-2f65d0ba6827",
                },
            },
        },
    });

    console.log(result);
}

main();