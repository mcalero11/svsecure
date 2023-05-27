import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesList from "@/components/CoursesList";
import CallToAction from "@/components/CallToAction";

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
