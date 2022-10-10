import React from "react";
import { Container } from "react-bootstrap";
import { MdAssessment, MdSchool } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkHistory.css";
import WorkHistoryCard from "./WorkHistoryCard";
import workhistoryData from "../../static/data/workhistoryData";

const WorkHistory = () => {
	const renderWorkHistory = () => {
		return workhistoryData.map((item, index) => (
			<WorkHistoryCard
				key={index}
				icon={
					item.type === "education" ? <MdSchool /> : <MdAssessment />
				}
				iconColor={item.color}
				backgroundColor={item.color}
				institution={item.institution}
				position={item.position}
				location={item.location}
				description={item.description}
			/>
		));
	};
	return (
		<Container className="WorkHistory">
			<SectionTitle title="Education / Work History" />
			<VerticalTimeline lineColor="white">
				{renderWorkHistory()}
				<VerticalTimelineElement
					iconStyle={{
						background: "#F4BC1C",
						color: "#fff",
					}}
					icon={<AiFillStar />}
				/>
			</VerticalTimeline>
		</Container>
	);
};

export default WorkHistory;
