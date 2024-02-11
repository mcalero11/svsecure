import Footer from "@/components/Footer";
import CoursesList from "@/components/CoursesList";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import courses from "@/core/courses.json";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CoursesList courses={courses} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
