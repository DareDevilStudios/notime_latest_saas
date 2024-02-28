import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import CourseDetailsTwo from "@/components/courseSingle/CourseDetailsTwo";
import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";
import { client } from "@/sanity/lib/client";
import React from "react";

export const metadata = {
  title:
    "Couese-single-2 || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};

async function getData(id) {
  console.log("id is " + id)
  const groqQuery = `
    *[_type == "course" && _id == $id][0] {
      _id,
      courseName,
      numberOfLessons,
      duration,
      level,
      rating,
      image,
      author,
      price,
      actualprice,
      description,
      learnings,
      prerequisites,
    }
  `;
  const res = await client.fetch(groqQuery, {
    id: id,
  });
  console.log("response is :" + res);

  // error
  if (!res) {
    return {
      notFound: true,
    };
  }

  return res;
}

export default async function page({ params }) {
  const data = await getData(params.id);
  console.log("data is ", data);
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper ">
        <PageLinks dark={true} />
        <CourseDetailsTwo data={data} id={params.id} />
        <CourseSlider />
        <FooterOne />
      </div>
    </div>
  );
}
