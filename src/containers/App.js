import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Sidebar from "../components/Sidebar/Sidebar";
import Techstack from "../components/Techstack/Techstack";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Home />
			<About />
			<Techstack />
			<WorkHistory />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
