import React from "react";

const ProjectsCard = ({ list }) => {
	return <div className="ProjectsCard">{list || "Default List"}</div>;
};

export default ProjectsCard;
