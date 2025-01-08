import coursesData from "@/core/courses.json";
import { CoursesList } from "@/components/CoursesList";

export default function Courses() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-12">Todos los cursos</h1>
      <CoursesList courses={coursesData} />
    </main>
  );
}
