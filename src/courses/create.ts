import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            duration: 500,
            description: "Curso de React Native",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Maik Brito",
                    },
                    create: {
                        name: "Maik Brito",
                    },
                },
            },
        },
    });

    console.log(result);
}

main();