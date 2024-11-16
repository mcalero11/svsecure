import { Course } from "@/core/types/Course";
import Image from "next/image";

type CoursesListProps = {
  courses: unknown;
};

const CoursesList = ({ courses }: CoursesListProps) => {
  const coursesList = courses as Course[];
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 px-6 max-w-screen-xl mx-auto">
      {coursesList.map((course, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 p-6 bg-white border border-transparent rounded-lg hover:border-secondaryBg  hover:shadow-sm"
        >
          <Image
            src={`/images/${course.image}`}
            width={250}
            height={250}
            alt={course.course_name}
            className={"rounded-lg"}
          />
          <h2 className="font-bold tracking-wide">{course.course_name}</h2>
          <p className="text-wrap">{course.course_description}</p>
        </div>
      ))}
    </article>
  );
};

export default CoursesList;
