import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkHistoryCard = ({
	icon,
	iconColor,
	backgroundColor,
	institution,
	date,
	location,
	position,
	description,
	color,
}) => {
	return (
		<VerticalTimelineElement
			className="WorkHistoryCard"
			contentStyle={{
				background: backgroundColor || "black",
				color: color || "white",
			}}
			contentArrowStyle={{
				borderRight: `7px solid  ${backgroundColor || "black"}`,
			}}
			date={date || "2011 - present"}
			iconStyle={{
				background: iconColor || "yellow",
				color: "#fff",
			}}
			icon={icon}
		>
			<div className="WorkHistoryCard__container">
				<div className="WorkHistoryCard__institution">
					{institution || "Default Institution"}
				</div>
				<div className="WorkHistoryCard__position">
					{position || "Default Position"}
				</div>
				<div className="WorkHistoryCard__location">
					{location || "Default Location"}
				</div>
				<div className="WorkHistoryCard__description">
					{description ||
						"Default Description Something Something Somehting Something"}
				</div>
			</div>
		</VerticalTimelineElement>
	);
};

export default WorkHistoryCard;
