import React from "react";
import ProjectCard from "./ProjectCard";
import { API_URL } from "../lib/config";
import { useAuth } from "../context/AuthContext";

const Projects = () => {
  const { allProjects, projectLoading, user } = useAuth();

  if (projectLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="mb-15.5 max-w-[1440px] mx-auto">
      <h1 className="font-bold text-[32px] mb-7.5">
        {allProjects?.length} search result(s) found
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
        {allProjects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            user={user}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
