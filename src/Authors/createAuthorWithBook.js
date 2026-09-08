import { prisma } from "../lib/prisma.js";

async function createAuthorWithBook() {
  const author = await prisma.author.create({
    data: {
      name: "Machado de Assis",
      books: {
        create: [
          {
            title: "Dom Casmurro",
          },
        ],
      },
    },
    include: {
      books: true,
    },
  });

  console.log("\n✅ AUTOR E LIVRO CADASTRADOS:");
  console.log(author);

  return author;
}

createAuthorWithBook()
  .catch((error) => {
    console.error("\n❌ ERRO:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });