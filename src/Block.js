import React from "react";

const size = "25px";

const Block = ({ block, updateGrid }) => {
	return (
		<div
			onClick={() => updateGrid(block.x, block.y, block.val === 0 ? 1 : 0)}
			className="Block"
			style={{
				minHeight: size,
				width: size,
				backgroundColor: block.val === 0 ? "lightgrey" : "yellow",
			}}
		></div>
	);
};

export default Block;
