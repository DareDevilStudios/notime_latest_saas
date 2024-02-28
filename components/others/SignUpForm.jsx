"use client";


import React from "react";
import {signIn } from "next-auth/react"

export default function SignUpForm() {
  const handleGoogleSignup =async () => {
    const result = await signIn("google");
    if (result?.error) {
      // Handle sign-in error
    } else {
      router.push("/");
    }
  };

  const handleGithubSignup = () => {
    signIn('github');
  };
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Sign Up</h3>
             



              <div className="d-flex x-gap-15 items-center  pt-20">
                <div>
                  <button  onClick={handleGoogleSignup} className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Log In via Google
                  </button>
                </div>
                <div>
                  <button onClick={handleGithubSignup} className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Log In via GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
