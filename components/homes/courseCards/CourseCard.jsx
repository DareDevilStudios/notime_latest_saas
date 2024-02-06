"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
export default function CourceCard({ data, index }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);

  useEffect(() => {
    console.log(`data is ${JSON.stringify(data)}`);
  }, [data]);

  return (
    <div className="col-lg-3 col-md-6">
      <div>
        <div className="coursesCard -type-1">
          <div className="relative">
            <div className="coursesCard__image overflow-hidden rounded-8">
              <Image
                width={500}
                height={500}
                style={{ height: "100%", width: "100%" }}
                className="w-1/1"
                src={urlForImage(data.image)}
                alt="image"
              />
              <div className="coursesCard__image_overlay rounded-8"></div>
            </div>
            {data.popular && (
              <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                <div>
                  <div className="px-15 rounded-200 bg-purple-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-white">
                      Popular
                    </span>
                  </div>
                </div>

                <div>
                  <div className="px-15 rounded-200 bg-green-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                      Best sellers
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
          </div>

          <div className="h-100 pt-15">
            <div className="d-flex items-center">
              <div className="text-14 lh-1 text-yellow-1 mr-10">
                {data.rating}.0
              </div>
              <div className="d-flex x-gap-5 items-center">
                {rating.map((itm, i) => (
                  <div key={i} className="icon-star text-9 text-yellow-1"></div>
                ))}
              </div>
              {/* <div className="text-13 lh-1 ml-10">({data.ratingCount})</div> */}
            </div>

            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
              <Link className="linkCustom" href={`/courses/${data.id}`}>
                {data.courseName}
              </Link>
            </div>

            <div className="d-flex x-gap-10 items-center pt-10">
              <div className="d-flex items-center">
                <div className="mr-8">
                  <Image
                    width={16}
                    height={17}
                    src="assets/img/coursesCards/icons/1.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">
                  {data.numberOfLessons} lesson
                </div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-8">
                  <Image
                    width={16}
                    height={17}
                    src="assets/img/coursesCards/icons/2.svg"
                    alt="icon"
                  />
                </div>
                {/* <div className="text-14 lh-1">{`${Math.floor(
                  data.hours / 60,
                )}h ${Math.floor(data.hours % 60)}m`}</div> */}
                <div className="text-14 lh-1">
                  {data.duration.hours}h {data.duration.minutes}m
                </div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-8">
                  <Image
                    width={16}
                    height={17}
                    src="assets/img/coursesCards/icons/3.svg"
                    alt="icon"
                  />
                </div>
                <div
                  onClick={() => {
                    setfirst(first + 1);
                  }}
                  className="text-14 lh-1"
                >
                  {data.level}
                </div>
              </div>
            </div>

            <div className="coursesCard-footer">
              <div className="coursesCard-footer__author">
                <Image
                  width={30}
                  height={30}
                  src={urlForImage(data.author?.author_image)}
                  alt="image"
                />
                <div>{data.author.author_name}</div>
              </div>

              <div className="coursesCard-footer__price">
                {data.price != 0 ? (
                  <>
                    <div>${data.actualprice}</div>
                    <div>${data.price}</div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>Free</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
