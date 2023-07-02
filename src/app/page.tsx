import Footer from "@/components/Footer";
import CoursesList from "@/components/CoursesList";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="font-serif lg:container lg:mx-auto lg:px-16">
      <Header />
      <main className="px-6 bg-white">
        <CoursesList />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
