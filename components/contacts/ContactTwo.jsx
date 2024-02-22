"use client";

import React from "react";
import { locationData } from "@/data/officeLocation";
import InputPill from "@/components/ input/InputPill";
export default function ContactTwo() {
  const [freelancer, setFreelancer] = React.useState('');
  // mentor
    const [mentor, setMentor] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function addTag(tag) {
    if(tag?.value===undefined) return;
    var tags=document.getElementById("tags");
    var span=document.createElement("span");
    span.textContent=tag.value;
    tag.value="";
    span.style.backgroundColor="whitesmoke";
    span.style.margin="2px";
    span.style.padding="2px";
    span.setAttribute("onclick", "this.remove()");
    tags.append(span);
  }

  return (
    <>
      <section className="page-header -type-4 bg-beige-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Join Our Freelance Community</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to create a freelance community.
                    <br /> Earn from your own places .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6 hidden md:flex flex-col">
              <h3 className="text-24 lh-1 fw-500">Our offices</h3>
              <div className="row y-gap-30 pt-40">
                {locationData.map((elm, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">
                      {elm.location}
                    </div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">
                        {elm.address}
                      </a>
                      <a href="#" className="d-block">
                        {elm.phoneNumber}
                      </a>
                      <a href="#" className="d-block">
                        {elm.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                <h3 className="text-24 fw-500">Welcome Techys</h3>
                <p className="mt-25">
                  Neque convallis a cras semper auctor. Libero id faucibus nisl
                  <br /> tincidunt egetnvallis.
                </p>

                <form
                  className="contact-form row y-gap-30 pt-60 lg:pt-40"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Name..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email Address
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Email..."
                    />
                  </div>
                  {/*whatsap number*/}
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Whatsap Number
                    </label>
                    <input
                        required
                        type="text"
                        name="title"
                        placeholder="Phone Number..."
                    />
                  </div>
                  {/*college dropdown */}
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            College
                        </label>
                        <select
                            required
                            name="title"
                            placeholder="College..."
                        >
                            <option >Select your college </option>
                            <option>Amrita School of Engineering, Amrita Vishwa Vidyapeetham</option>
                            <option>Sree Narayana Gurukulam College of Engineering (SNGCE)</option>
                            <option>Federal Institute of Science and Technology (FISAT)</option>
                            <option>Cochin University of Science and Technology (CUSAT)</option>
                            <option>Rajagiri School of Engineering and Technology</option>
                            <option>Albertian Institute of Science and Technology (AISAT)</option>
                            <option>Pinnacle Institute of Engineering and Technology</option>
                            <option>CUSAT School of Engineering</option>
                            <option>St. Joseph's College of Engineering and Technology</option>
                            <option>Mar Athanasius College of Engineering</option>
                            <option>Model Engineering College</option>
                            <option>Adarsh Institute of Engineering and Technology</option>
                            <option>MES College (MESC), Ernakulam</option>
                            <option>St. Teresa's College, Ernakulam</option>
                            <option>Government Engineering College, Thrissur</option>
                            <option>IHRD College of Hotel Management, Kochi</option>
                            <option>SCMS School of Business Management</option>
                            <option>Toc-H</option>

                        </select>
                    </div>
                  {/*are you a freelancer ?*/}
                    <div className={"flex flex-col gap-3"}>
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 ">
                          Are you interested in working as a freelancer ?
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="form-check-label" htmlFor="freelancerYes">
                          Yes
                        </label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="freelancerYes"
                            name="freelancer"
                            value="Yes"
                            checked={freelancer === 'Yes'}
                            onChange={(e) => setFreelancer(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="freelancerNo">
                          No
                        </label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="freelancerNo"
                            name="freelancer"
                            value="No"
                            checked={freelancer === 'No'}
                            onChange={(e) => setFreelancer(e.target.value)}
                        />
                      </div>
                    </div>
                  {/*add you skills*/}
                  <div className={"flex flex-col gap-3 text-md"}>
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 ">
                        Add your skills
                      </label>
                    </div>
                  </div>
                    <InputPill/>
                  {/*div for asking interest in mentoring technical skills*/}
                    <div className={"flex flex-col gap-3"}>
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 ">
                            Are you interested in mentoring technical skills ?
                        </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="form-check-label" htmlFor="mentorYes">
                                Yes
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="mentorYes"
                                name="mentor"
                                value="Yes"
                                checked={mentor === 'Yes'}
                                onChange={(e) => setMentor(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="mentorNo">
                                No
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="mentorNo"
                                name="mentor"
                                value="No"
                                checked={mentor === 'No'}
                                onChange={(e) => setMentor(e.target.value)}
                            />
                        </div>
                    </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Enter the skills you want to learn in 2024
                    </label>
                    <InputPill/>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Join Community
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
