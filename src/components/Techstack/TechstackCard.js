import React from "react";

const TechstackCard = ({ tech, backgroundColor }) => {
	return (
		<div
			className="TechstackCard"
			style={{ backgroundColor: backgroundColor || "white" }}
		>
			<div className="TechstackCard__icon"></div>
			<div className="TechstackCard__tech">{tech || "Default Tech"}</div>
		</div>
	);
};

export default TechstackCard;
