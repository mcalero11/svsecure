import Image from "next/image";
import Link from "next/link";
import { Course } from "@/core/types/Course";

type CoursesListProps = {
  courses: Course[];
  showViewAllCard?: boolean;
};

export function CoursesList({ courses, showViewAllCard }: CoursesListProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 sm:px-6 md:px-8">
      {courses.map((course) => (
        <div
          key={course.course_name}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={`/images/${course.image}`}
              alt={course.course_name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-2">{course.course_name}</h3>
            <p className="text-gray-600">{course.course_description}</p>
          </div>
        </div>
      ))}

      {showViewAllCard && (
        <Link
          href="/courses"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-h-[400px] group"
        >
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Ver todos los cursos
            </h3>
            <p className="text-gray-600 mb-4">
              Explora nuestra colección completa de cursos de seguridad
            </p>
            <span
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors"
              role="button"
              aria-label="Ver todos los cursos disponibles"
            >
              Ver más →
            </span>
          </div>
        </Link>
      )}
    </article>
  );
}
