import React from "react";

const size = "25px";

const Block = ({ val }) => {
	return (
		<div
			className="Block"
			style={{
				minHeight: size,
				width: size,
				backgroundColor: val === 0 ? "lightgrey" : "yellow",
			}}
		></div>
	);
};

export default Block;
