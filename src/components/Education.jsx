import { useState } from "react";

function Education({ updateEducation }) {
	const [education, setEducation] = useState("");

	const handleChange = (e) => {
		setEducation(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateEducation(education);
	};
	return (
		<>
			<label htmlFor="education">Education: </label>
			<input
				type="text"
				id="education"
				name="education"
				value={education}
				onChange={handleChange}
			/>
			<button className="btn" type="submit" onClick={handleSubmit}>
				{" "}
				Submit{" "}
			</button>
		</>
	);
}

export default Education;
