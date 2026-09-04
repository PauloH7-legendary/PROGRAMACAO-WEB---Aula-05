import { prisma } from "../lib/prisma.js";

export async function updateCourse(id, name) {
  const course = await prisma.course.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  console.log(`\n✅ CURSO ${id} ATUALIZADO:`);
  console.log(course);

  return course;
}