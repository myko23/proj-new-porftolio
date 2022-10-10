import React from "react";
import { Link } from "react-scroll";

const SidebarCard = ({ icon, title, expand, target }) => {
	return (
		<Link
			activeClass="SidebarCard--active"
			to={target || "Home"}
			spy={true}
			hashSpy={true}
			offset={-100}
			className="SidebarCard"
		>
			{icon}
			{expand ? (
				<div className="SidebarCard__nav-item">{title || "Title"}</div>
			) : null}
		</Link>
	);
};

export default SidebarCard;
