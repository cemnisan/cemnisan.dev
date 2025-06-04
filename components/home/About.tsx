import React from "react";
import SectionTitle from "../global/SectionTitle";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="flex flex-col pt-8 relative">
      <SectionTitle title="About Me" />
      <div className="w-full flex flex-col md:flex-row-reverse md:justify-between items-center md:items-stretch mt-8">
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mb-6 md:mb-0 md:mr-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/static/about/cemnisannn.jpg"
              alt="Cem Nisan"
              width={300}
              height={300}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex-grow max-w-3xl md:pr-8 flex flex-col justify-center">
          <p className="text-white text-xl leading-relaxed text-center md:text-left">
            I'm a passionate iOS developer with 3 years of experience in Swift
            development. Recently, I've expanded my expertise to include web
            development, working with React and Next.js to create modern,
            responsive web applications.
          </p>
          <p className="text-white text-xl leading-relaxed mt-6 text-center md:text-left">
            When I'm not coding, you can find me behind the lens, capturing
            moments through photography. This creative hobby allows me to
            express myself artistically and brings a unique perspective to my
            development work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
