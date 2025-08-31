import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const allProjects = [1, 2, 3, 4, 5, 6];
  return (
    <section className="mb-15.5 max-w-[1440px] mx-auto">
      <h1 className="font-bold text-[32px]">5 search result(s) found</h1>

      <div className="grid grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard key={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
