import React, { useEffect, useState } from "react";
import "./Techstack.css";
import { Col, Container, Row } from "react-bootstrap";
import TechstackCard from "./TechstackCard";
import techData from "../../static/data/techData";
import SectionTitle from "../SectionTitle/SectionTitle";
import loopColor from "../../functions/loopColor";
import colorData from "../../static/data/colorData";

const Techstack = () => {
	const [techList, setTechList] = useState(6);
	const [techSelected, setTechSelected] = useState(1);
	const [techTitleSelected, settechTitleSelected] = useState("");
	const [techDescSelected, settechDescSelected] = useState("");

	useEffect(() => {
		const tech = techData[techSelected];
		settechTitleSelected(tech.name);
		settechDescSelected(tech.description);
	}, [techSelected]);

	const renderTechList = () => {
		return techData.slice(0, techList).map((item, index) => (
			<Col
				key={index}
				sm={12}
				md={6}
				lg={4}
				xl={4}
				className={`Techstack__items ${
					techSelected === index ? "Techstack__items--selected" : ""
				}`}
				onClick={() => setTechSelected(index)}
			>
				<TechstackCard
					tech={item.name}
					backgroundColor={loopColor(colorData, index)}
				/>
			</Col>
		));
	};

	return (
		<Container className="Techstack">
			<SectionTitle title="Tech Stack" />
			<Container fluid className="TechStack__description">
				<Row className="TechStack__desc-box">
					<Col
						sm={12}
						md={12}
						lg={6}
						xl={6}
						className="TechStack__desc-title"
					>
						{techTitleSelected}
					</Col>
					<Col
						sm={12}
						md={12}
						lg={6}
						xl={6}
						className="TechStack__desc-description"
					>
						{techDescSelected}
					</Col>
				</Row>
			</Container>
			<Row className="Techstack__row">{renderTechList()}</Row>
			<div
				className="Techstack__btn"
				onClick={() => {
					if (techData.length > techList) {
						setTechList(techList + 3);
					}
				}}
			>
				Load More
			</div>
		</Container>
	);
};

export default Techstack;
