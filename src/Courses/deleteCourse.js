import { prisma } from "../lib/prisma.js";

export async function deleteCourse(id) {
  const course = await prisma.course.delete({
    where: {
      id,
    },
  });

  console.log(`\n✅ CURSO ${id} EXCLUÍDO:`);
  console.log(course);

  return course;
}