import React, { useState } from "react";

const Callback = ({ getColor }) => {
	const [activeColor, setActiveColor] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setActiveColor(value);
		getColor(value);
	}

	return (
		<div className="input">
			<input
				type="text"
				id="input"
				aria-label="input"
				onChange={handleChange}
				value={activeColor}
			/>
		</div>
	);
}

export default Callback;