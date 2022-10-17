import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "7df4cbbe-a590-4462-b836-5a610090d85b",
        },
        data: {
            duration: 300,
            name: "Curso de ReactJS",
            description: "Curso excelente com Diego Fernandes",
        },
    });
}

main();