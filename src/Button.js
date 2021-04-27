import React from "react";

const Button = ({ onClick, text }) => {
	return (
		<div
			className="button"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "stretch",
			}}
		>
			<button
				onClick={onClick}
				style={{
					backgroundColor: "teal",
					border: "none",
					padding: "10px",
					fontSize: "18px",
					color: "white",
					margin: "5px",
					borderRadius: "5px",
				}}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
