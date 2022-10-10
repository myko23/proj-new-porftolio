import {
	faBars,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Sidebar.css";
import SidebarList from "./SidebarList";
import profilePic from "../../static/images/profile-pic.png";

const Sidebar = () => {
	const [ExpandList, setExpandList] = useState(false);

	return (
		<div className="Sidebar">
			<Container fluid className="Sidebar__mcontent">
				<div
					className="Sidebar__mnav"
					onClick={() => setExpandList(!ExpandList)}
				>
					<FontAwesomeIcon
						className="Sidebar__mnav-button"
						icon={faBars}
					/>
				</div>
				<div
					className={`Sidebar__mlist ${
						ExpandList ? "Sidebar__mlist--expand" : ""
					}`}
				>
					<SidebarList expand={true} />
				</div>
			</Container>
			<div
				className={`Sidebar__content ${
					ExpandList ? "Sidebar__content--expand" : ""
				}`}
			>
				<div
					className="Sidebar___expand"
					onClick={() => setExpandList(!ExpandList)}
				>
					<FontAwesomeIcon
						className="Sidebar__expand-btn"
						icon={ExpandList ? faChevronLeft : faChevronRight}
					/>
				</div>
				{ExpandList ? (
					<div className="Sidebar__user-container">
						<img
							className="Sidebar__prof-pic"
							src={profilePic}
							alt="Profile Pic"
						/>
						<div className="Sidebar__user">Meg Franco P. Bacal</div>
					</div>
				) : null}
				<div className="Sidebar__list">
					<SidebarList expand={ExpandList} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
