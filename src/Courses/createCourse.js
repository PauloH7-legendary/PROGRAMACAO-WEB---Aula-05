import { prisma } from "../lib/prisma.js";

export async function createCourse(name) {
  const course = await prisma.course.create({
    data: {
      name,
    },
  });

  console.log("\n✅ CURSO CADASTRADO:");
  console.log(course);

  return course;
}