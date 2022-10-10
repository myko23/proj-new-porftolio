import React from "react";
import SidebarCard from "./SidebarCard";
import {
	FcAbout,
	FcAddDatabase,
	FcContacts,
	FcDiploma2,
	FcFlowChart,
	FcHome,
} from "react-icons/fc";

const SidebarList = ({ expand }) => {
	return (
		<>
			<SidebarCard
				expand={expand}
				target="Home"
				title="Home"
				icon={<FcHome />}
			/>
			<SidebarCard
				expand={expand}
				target="About"
				title="About"
				icon={<FcAbout />}
			/>
			<SidebarCard
				expand={expand}
				target="Techstack"
				title="Techstack"
				icon={<FcAddDatabase />}
			/>
			<SidebarCard
				expand={expand}
				target="WorkHistory"
				title="Work History"
				icon={<FcDiploma2 />}
			/>
			<SidebarCard
				expand={expand}
				target="Projects"
				title="Projects"
				icon={<FcFlowChart />}
			/>
			<SidebarCard
				expand={expand}
				target="Contact"
				title="Contact"
				icon={<FcContacts />}
			/>
		</>
	);
};

export default SidebarList;
