import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import { useState } from "react";
import styles from "./styles/styles.css";

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
			<form>
				<h3>Fill in the fields to generate your resume:</h3>
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
			<section className="resume-container">
				<h1>Resume</h1>
				<label htmlFor="name">Name: </label>
				<p>{name}</p>
				<label htmlFor="experience">Experience: </label>
				<p>{experience}</p>
				<label htmlFor="education">Education:</label>
				<p>{education}</p>
			</section>
		</>
	);
}

export default App;
