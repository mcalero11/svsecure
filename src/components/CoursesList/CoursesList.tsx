import { Course } from "@/core/types/Course";
import Image from "next/image";

type CoursesListProps = {
  courses: unknown;
};

const CoursesList = ({ courses }: CoursesListProps) => {
  const coursesList = courses as Course[];
  return (
    <article className={"px-6 md:px-24 my-16"}>
      {coursesList.map((course, index) => (
        <>
          <Image
            src={`/images/${course.image}.jpg`}
            alt={course.course_name}
            className={"w-full rounded-lg"}
          />
          <h2 key={index}>{course.course_name}</h2>
          <p>{course.course_description}</p>
        </>
      ))}
    </article>
  );
};

export default CoursesList;
