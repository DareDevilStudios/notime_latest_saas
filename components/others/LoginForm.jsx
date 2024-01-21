"use client";

import Link from "next/link";
import React from "react";
import {signIn } from "next-auth/react"

export default function LoginForm() {
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
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Login</h3>
              <p className="mt-10">
                Don't have an account yet?
                <Link href="/signup" className="text-purple-1">
                  Sign up for free  Or sign in using
                </Link>
              </p>

          

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button onClick={handleGoogleSignup} className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
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
