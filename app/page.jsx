// import HomeOne from "@/components/homes/home";
import Header from "../components/layout/headers/Header";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../components/homes/heros/HomeHero";

import Brands from "../components/common/Brands";
import Categories from "../components/homes/categories/Categories";
import Courses from "../components/homes/courses/Courses";
import About from "../components/about/About";
import TestimonialsOne from "../components/common/TestimonialsOne";
import FeaturesOne from "../components/homes/features/FeaturesOne";
import WhyCourse from "../components/homes/WhyCourse";
import Instructors from "../components/common/Instructors";
import GetApp from "../components/homes/getApp/GetApp";
import Blog from "../components/homes/blogs/Blog";
import Join from "../components/homes/join/Join";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title:
    "Home-1 || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};

const groqQuery = `
  *[_type == "course"] {
    courseName,
    numberOfLessons,
    duration,
    level,
    rating,
    image,
    author,
    price,
    actualprice,
  }
`;

async function getData() {
  const res = client.fetch(groqQuery);
  console.log(res)

  // error
  if (!res) {
    return {
      notFound: true,
    };
  }

  return res;
}

export default async function HomePage() {
  const data = await getData();
  return (
    <>
      <Preloader />
      <Header />

      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        {/*<Brands/>*/}
        {/*<Categories />*/}
        <About />
        <WhyCourse />
        <Courses data={data} />
        <TestimonialsOne />
        {/*<FeaturesOne/>*/}
        {/*<Instructors/>*/}
        {/*<GetApp/>*/}
        <Blog />
        {/*<Join/>*/}
        <FooterOne />
      </div>
    </>
  );
}
