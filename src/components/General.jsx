import { useState } from "react";

function General({ onSubmit }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleChange = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "phone") {
			setPhone(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ name, email, phone });
		setName(""); // Makes the input field empty after submitting
		setEmail(""); // Makes the input field empty after submitting
		setPhone(""); // Makes the input field empty after submitting
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleChange}
				/>

				<label htmlFor="email">Email: </label>
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>

				<label htmlFor="phone">Phone: </label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={phone}
					onChange={handleChange}
				/>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		</>
	);
}

export default General;
