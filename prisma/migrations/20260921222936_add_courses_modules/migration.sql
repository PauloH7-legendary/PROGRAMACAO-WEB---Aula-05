-- CreateTable
CREATE TABLE "CoursesModules" (
    "courseId" INTEGER NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "CoursesModules_pkey" PRIMARY KEY ("courseId","moduleId")
);

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
