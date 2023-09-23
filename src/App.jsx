import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [experience, setExperience] = useState("");
	const [education, setEducation] = useState("");

	// Define function to update the name state in App.jsx
	const updateName = (newName) => {
		setName(newName);
	};

	const updateExperience = (newExperience) => {
		setExperience(newExperience);
	};

	const updateEducation = (newEducation) => {
		setEducation(newEducation);
	};

	return (
		<>
			<h3>Fill in the fields to generate your resume:</h3>
			<form>
				<section className="general">
					<General value={name} updateName={updateName} />
				</section>
				<section className="experience">
					<Experience
						value={experience}
						updateExperience={updateExperience}
					/>
				</section>
				<section className="education">
					<Education
						value={education}
						updateEducation={updateEducation}
					/>
				</section>
			</form>
			<h1>Resume</h1>
			<p>Name entered in General Component: {name}</p>
			<p>Name entered in Experience Component: {experience}</p>
			<p>Name entered in Education Component: {education}</p>
		</>
	);
}

export default App;
