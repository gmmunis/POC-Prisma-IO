import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de .NET",
            duration: 500,
            description: "Curso de .NET",
            fk_id_teacher: "0d794a75-465b-4527-810d-ce0d20c73179",
        },
    });

    console.log(result);
}

main();