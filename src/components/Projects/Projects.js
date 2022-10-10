import React from "react";
import "./Projects.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import profPicture from "../../static/images/profile-pic.png";
import ProjectsCard from "./ProjectsCard";
import {
	FcAbout,
	FcAcceptDatabase,
	FcAddressBook,
	FcAlarmClock,
	FcAlphabeticalSortingAz,
	FcPhone,
} from "react-icons/fc";

const Projects = () => {
	return (
		<Container className="Projects">
			<SectionTitle title="Projects" />
			<Row>
				<Col
					sm={12}
					md={12}
					lg={6}
					xl={6}
					className="Projects__profile-photo"
				>
					<img
						className="Projects__profile"
						src={profPicture}
						alt="Profile"
					/>
				</Col>
				<Col
					sm={12}
					md={12}
					lg={6}
					xl={6}
					className="Projects__list-section"
				>
					<div className="Projects__lists">
						<div className="Projects__display">
							<div className="Projects__camera"></div>
							<div className="Projects__chart">
								<div className="Projects__display-title">
									Projects
								</div>
								<div className="Projects__display-list">
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
									<ProjectsCard title="Robocop" />
								</div>
							</div>
							<div className="Projects__display-nav">
								<div className="Projects__display-nav-overlay"></div>
								<FcPhone className="Projects__display-icon" />
								<FcAcceptDatabase className="Projects__display-icon" />
								<FcAddressBook className="Projects__display-icon" />
								<FcAlarmClock className="Projects__display-icon" />
								<FcAlphabeticalSortingAz className="Projects__display-icon" />
								<FcAbout className="Projects__display-icon" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
