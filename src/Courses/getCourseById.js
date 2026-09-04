import { prisma } from "../lib/prisma.js";

export async function getCourseById(id) {
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  console.log(`\n✅ CURSO COM ID ${id}:`);
  console.log(course);

  return course;
}