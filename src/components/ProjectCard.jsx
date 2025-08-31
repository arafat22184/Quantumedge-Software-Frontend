import React from "react";

const ProjectCard = () => {
  return (
    <div className="pt-6 pb-8.5 pl-5 pr-10">
      <p>Apr 30, 2024</p>
      <h2>Website Design and Front-End Development</h2>
      <div>
        <p>Fixed Price Project</p>
        <p>$1,200-$1,400</p>
      </div>
      <p>
        In this role, you will be responsible for conducting comprehensive SEO
        audits and implementing strategies to optimize websites...
      </p>

      {/* details */}
      <div>
        <p>App Design</p>
        <p>Art Generation</p>
        <p>Illustration</p>
      </div>
      <p>Posted by Eamman Olio</p>
      <button>Apply Now</button>
    </div>
  );
};

export default ProjectCard;
