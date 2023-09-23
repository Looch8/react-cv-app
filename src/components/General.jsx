import { useState } from "react";

function General({ value, updateName }) {
	const [name, setName] = useState(value);

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Call the updateName function to update name in App component
		updateName(name);
		setName(""); // Makes the input field empty after submitting
	};

	return (
		<>
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={handleChange}
			/>
			<button className="btn" type="submit" onClick={handleSubmit}>
				{" "}
				Submit{" "}
			</button>
		</>
	);
}

export default General;
