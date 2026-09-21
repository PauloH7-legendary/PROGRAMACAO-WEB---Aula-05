import { prisma } from "../lib/prisma.js";

async function main() {
  console.log("\n===== TESTE DO RELACIONAMENTO N:N =====\n");

  // 1. Criar um curso
  const course = await prisma.course.create({
    data: {
      name: "Curso N:N com Prisma",
    },
  });

  console.log("✅ CURSO CRIADO:");
  console.log(course);

  // 2. Criar um módulo ligado ao curso
  const module = await prisma.module.create({
    data: {
      name: "Módulo de Relacionamentos",
      courseId: course.id,
    },
  });

  console.log("\n✅ MÓDULO CRIADO:");
  console.log(module);

  // 3. Criar a associação na tabela intermediária CoursesModules
  const courseModule = await prisma.coursesModules.create({
    data: {
      courseId: course.id,
      moduleId: module.id,
    },
  });

  console.log("\n✅ ASSOCIAÇÃO COURSE ↔ MODULE CRIADA:");
  console.log(courseModule);

  // 4. Consultar o curso incluindo os dados relacionados
  const courseWithModules = await prisma.course.findUnique({
    where: {
      id: course.id,
    },
    include: {
      courseModules: {
        include: {
          module: true,
        },
      },
    },
  });

  console.log("\n✅ CONSULTA COM INCLUDE:");
  console.log(courseWithModules);

  // 5. Remover a associação da tabela intermediária
  const deletedRelation = await prisma.coursesModules.delete({
    where: {
      courseId_moduleId: {
        courseId: course.id,
        moduleId: module.id,
      },
    },
  });

  console.log("\n✅ ASSOCIAÇÃO REMOVIDA DA TABELA CoursesModules:");
  console.log(deletedRelation);
  
}

main()
  .catch((error) => {
    console.error("\n❌ ERRO:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });