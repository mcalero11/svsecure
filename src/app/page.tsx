import Footer from "@/components/Footer";
import { CoursesList } from "@/components/CoursesList";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import courses from "@/core/courses.json";

const Home = () => {
  const trimmedCourses = courses.slice(0, 5);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-9 my-9 items-center">
        <CoursesList courses={trimmedCourses} showViewAllCard />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
