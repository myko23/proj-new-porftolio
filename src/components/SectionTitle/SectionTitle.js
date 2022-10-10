import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
	return (
		<div className="SectionTitle">
			<div className="SectionTitle__title">
				{title || "Default Title"}
			</div>
			<div className="SectionTitle__line"></div>
		</div>
	);
};

export default SectionTitle;
