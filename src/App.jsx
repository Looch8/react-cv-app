import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");

	// Define function to update the name state in App.jsx
	const updateName = (newName) => {
		setName(newName);
	};

	return (
		<>
			<h3>Fill in the fields to generate your resume:</h3>
			<form>
				<section className="general">
					<General value={name} updateName={updateName} />
				</section>
				<section className="experience">
					<Experience />
				</section>
				<section className="experience">
					<Education />
				</section>
			</form>
			<h1>Resume</h1>
			<p>Name entered in General Component: {name}</p>
		</>
	);
}

export default App;
