import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "7037d665-b5e1-4bae-8bbf-99737596bf26",
            fk_id_module: "48e00fe9-94a7-4721-b934-e28a1b4d5071",
        },
    });

    console.log(result);
}

main();