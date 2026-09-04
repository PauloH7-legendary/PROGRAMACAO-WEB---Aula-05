import { createCourse } from "./createCourse.js";
import { getCourseById } from "./getCourseById.js";
import { getCourses } from "./getCourses.js";
import { updateCourse } from "./updateCourse.js";
import { deleteCourse } from "./deleteCourse.js";
import { prisma } from "../lib/prisma.js";

async function main() {
  console.log("=================================");
  console.log("     TESTE COMPLETO DO CRUD");
  console.log("=================================");

  // CREATE
  const createdCourse = await createCourse("Curso CRUD com Prisma");

  const courseId = createdCourse.id;

  // READ - buscar pelo ID
  await getCourseById(courseId);

  // READ - buscar todos
  await getCourses();

  // UPDATE
  await updateCourse(
    courseId,
    "Curso CRUD com Prisma - Atualizado"
  );

  // READ - conferir alteração
  await getCourseById(courseId);

  // DELETE
  await deleteCourse(courseId);

  // READ - conferir exclusão
  await getCourses();

  console.log("\n=================================");
  console.log("      ✅ CRUD FINALIZADO");
  console.log("=================================");
}

main()
  .catch((error) => {
    console.error("\n❌ ERRO:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });