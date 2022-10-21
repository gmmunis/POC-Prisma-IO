import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            description: "Aprendendo firebase do zero",
            name: "Aprendendo Firebase",
            courses: {
                create: {
                    course: {
                        connect: {
                            id: "7037d665-b5e1-4bae-8bbf-99737596bf26",
                        },
                    },
                },
            },
        },
    });

    console.log(result);
}

main();