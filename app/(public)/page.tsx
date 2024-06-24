import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 ">
      <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Welcome to Next.js Authentication
      </h1>
      <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow-sm  text-gray-900 "
          href="/signup"
        >
          Sign up
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow-sm  text-gray-900 "
          href="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Page;
