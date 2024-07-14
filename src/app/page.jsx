import React from "react";

const Page = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600">Explore and enjoy our content!</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {children}
      </section>
    </main>
  );
};

export default Page;
