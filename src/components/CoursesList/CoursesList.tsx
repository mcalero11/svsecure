import courses from "@/core/courses.json";

const CoursesList = () => {
  return (
    <article className={"px-6 md:px-24 my-16"}>
      {courses.map((course, index) => (
        <h2 key={index}>{course.course_name}</h2>
      ))}
    </article>
  );
};

export default CoursesList;
