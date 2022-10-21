import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "3557f4d5-1d56-44ae-a269-d827d9117818",
        },
    });

    console.log(result);
}

main();