import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Photography
      </h1>
      <p className="flex flex-col text-fun-gray text-xl sm:text-2xl">
        You can see the photos I have taken so far here.
        <p>
          You can also visit my{" "}
          <a
            href="https://www.pexels.com/tr-tr/@cemnisan/"
            className="text-fun-gray-light font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels{" "}
          </a>
          profile.
        </p>
      </p>
    </div>
  );
}

export default Heading;
