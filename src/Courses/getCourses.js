import { prisma } from "../lib/prisma.js";

export async function getCourses() {
  const courses = await prisma.course.findMany({
    orderBy: {
      id: "asc",
    },
  });

  console.log("\n✅ TODOS OS CURSOS:");
  console.log(courses);

  return courses;
}