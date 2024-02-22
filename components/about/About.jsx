import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section id="aboutus" className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Empowering Futures, Inspiring Success: Discover NoTime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <Image
                    width={300}
                    height={400}
                    src="/assets/img/home-1/hero/1.webp"
                    alt="image"
                  />
                </div>
                <div className="-el-2">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/img/home-1/hero/2.webp"
                    alt="image"
                  />
                </div>
                <div className="-el-3">
                  <Image
                    width={255}
                    height={250}
                    src="/assets/img/home-1/hero/3.webp"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
                Welcome to NoTime, Enhance your skills with best Online courses
              </h2>
              <p className="text-dark-1 mt-30">
                At Notime, we are on a mission to redefine education. Our focus
                goes beyond textbooks and theories, emphasizing practical
                learning and hands-on experiences. By providing quality
                education through innovative programs, mentorship, and exposure
                to real-world projects, we prepare our students for success in
                the professional arena. Our curated approach, coupled with a
                commitment to creating a community of lifelong learners, sets
                Notime apart as a catalyst for personal and professional growth.
              </p>
              <p className="pr-50 lg:pr-0 mt-25">
                Join us in revolutionizing education — where knowledge meets
                application, and every student is empowered to thrive in a
                dynamic and ever-evolving world.
              </p>
              <div className="d-inline-block">
                <Link
                  href="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  Start Learning For Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
