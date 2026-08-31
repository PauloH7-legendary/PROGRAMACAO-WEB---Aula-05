import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL não foi encontrada.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const course = await prisma.course.create({
    data: {
      name: "Desenvolvimento Web",
      modules: {
        create: [
          {
            name: "Node.js",
          },
          {
            name: "Prisma ORM",
          },
          {
            name: "PostgreSQL",
          },
        ],
      },
    },
    include: {
      modules: true,
    },
  });

  console.log("Curso criado com sucesso!");
  console.log(course);
}

main()
  .catch((error) => {
    console.error("Erro:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });