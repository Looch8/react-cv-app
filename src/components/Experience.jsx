import { useState } from "react";

function Experience({ updateExperience }) {
	const [experience, setExperience] = useState("");

	const handleChange = (e) => {
		setExperience(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateExperience(experience);
		setExperience(""); // Makes the input field empty after submitting
	};
	return (
		<>
			<label htmlFor="experience">Experience: </label>
			<input
				type="text"
				id="experience"
				name="experience"
				value={experience}
				onChange={handleChange}
			/>
			<button className="btn" type="submit" onClick={handleSubmit}>
				{" "}
				Submit{" "}
			</button>
		</>
	);
}

export default Experience;
