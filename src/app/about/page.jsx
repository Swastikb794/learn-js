import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-blue-200 h-64 w-96 p-8 m-4 rounded-lg hover:bg-blue-300">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Swastik Bhandarkar
        </h1>
        <p className="text-lg text-green-900">Electronic Enthusiast</p>
        <p className="text-base text-gray-600">
          I've been exploring Next.js and TailwindCSS, learning how to set up
          routes, style components with TailwindCSS classes, and leverage React
          functionalities effectively. It's been exciting to see how quickly I
          can prototype UI components and manage routes using file-based routing
          in Next.js. Looking forward to diving deeper into dynamic routing and
          advanced styling techniques!
        </p>
      </div>
    </>
  );
};

export default Page;
