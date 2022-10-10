import React from "react";
import { Container } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import "./Home.css";

const Home = () => {
	return (
		<Container fluid className="Home">
			<Container className="Home__content">
				<div className="Home__greetings">
					Hi, I am{" "}
					<span className="Home__name">Meg Franco Bacal</span>
				</div>
				<div className="Home__title">
					<TypeWriterEffect
						textStyle={{
							color: "yellow",
							fontWeight: 500,
							fontSize: "1.5rem",
						}}
						cursorColor="#3F3D56"
						multiText={[
							"Software Engineer",
							"React Developer",
							"I would like to help you with your needs.",
							"Email me and see how it goes.",
						]}
						multiTextDelay={1000}
						typeSpeed={30}
					/>
				</div>
				<div className="Home__btn-container">
					<div className="Home__btn">Hire Me</div>
					<div className="Home__btn">Get My Resume</div>
				</div>
			</Container>
		</Container>
	);
};

export default Home;
