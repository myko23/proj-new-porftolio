import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profilePic from "../../static/images/profile-pic.png";
import "./About.css";

const About = () => {
	return (
		<Container className="About">
			<Row className="About__row">
				<Col
					sm={12}
					md={12}
					lg={6}
					xl={6}
					className="About__col About__col--picture"
				>
					<img
						src={profilePic}
						alt="Profile"
						className="About__picture"
					/>
				</Col>
				<Col
					sm={12}
					md={12}
					lg={6}
					xl={6}
					className="About__col About__col--description"
				>
					<div className="About__description-title">About</div>
					<div className="About__description">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Aut nobis quisquam dolorum repudiandae officiis
						qui optio delectus quo itaque aspernatur. Necessitatibus
						quibusdam voluptas fugit nemo culpa? Modi itaque libero
						in. Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Aut nobis quisquam dolorum repudiandae officiis
						qui optio delectus quo itaque aspernatur. Necessitatibus
						quibusdam voluptas fugit nemo culpa? Modi itaque libero
						in.
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
