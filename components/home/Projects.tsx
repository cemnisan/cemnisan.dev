import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";

import ProjectCard from "../projects/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore" className="flex flex-col">
        <SectionTitle title="Here are a few of my projects." mb={2} />
        <p className="text-sm text-gray-500 mt-0 mb-4 text-center md:text-left">
          There will be mobile applications soon (I hope so) ¯\_(ツ)_/¯
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mt-10">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
