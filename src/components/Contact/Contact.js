import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
	return (
		<Container className="Contact">
			<div className="Contact__container">
				<div className="Contact__nav">
					<div className="Contact__nav-details">
						<div className="Contact__nav-header">Contact Us</div>
						<div className="Contact__nav-description">
							Fill in the form below to send me a message
						</div>
					</div>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="Contact__nav-icon"
					/>
				</div>
				<div className="Contact__form">
					<input
						type="text"
						placeholder="Email"
						className="Contact__email"
					/>
					<input
						type="text"
						placeholder="Subject"
						className="Contact__email"
					/>
					<textarea
						className="Contact__email Contact__email--textarea"
						id=""
						cols="30"
						rows="5"
						defaultValue="Contact Me"
					></textarea>
					<div className="Contact__submit-btn">Contact Me</div>
				</div>
			</div>
		</Container>
	);
};

export default Contact;
