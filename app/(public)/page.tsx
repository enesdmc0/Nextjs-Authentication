import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to our Platform
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The all-in-one platform for building, deploying, and managing modern
          web apps.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="/signup"
        >
          Sign up
        </Link>
        <Link
          className="rounded-md border px-4 py-1.5 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
          href="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Page;
