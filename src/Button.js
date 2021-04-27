import React from "react";

const Button = ({ onClick, text }) => {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: "teal",
				border: "none",
				padding: "10px",
				fontSize: "18px",
				color: "white",
				margin: "5px",
				borderRadius: "15%",
			}}
		>
			{text}
		</button>
	);
};

export default Button;
