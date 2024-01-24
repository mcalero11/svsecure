import Footer from "@/components/Footer";
import CoursesList from "@/components/CoursesList";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CoursesList />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
