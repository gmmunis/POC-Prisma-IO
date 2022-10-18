import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React",
            duration: 500,
            description: "Curso de React",
            teacher: {
                create: {
                    name: "Guilherme Munis"
                },
            },
        },
    });

    console.log(result);
}

main();