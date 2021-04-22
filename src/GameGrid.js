import React, { useEffect, useState } from "react";

import Block from "./Block";

//make grid an array of objects storing that block "coordinated" and its value

const GameGrid = ({ width, height }) => {
	const [grid, setGrid] = useState([[0]]);
	console.log(grid.length);

	useEffect(() => {
		const tempGrid = [];

		for (let i = 0; i < height; i++) {
			const tempRow = [];
			for (let j = 0; j < width; j++) {
				tempRow.push(0);
			}
			tempGrid.push(tempRow);
		}

		setGrid(tempGrid);
	}, [height, width, setGrid]);

	let longGrid = [];
	grid.forEach((row) => {
		longGrid = [...longGrid, ...row];
	});
	console.log(longGrid);
	console.log(longGrid.length);

	let key = 0;
	const renderedGrid = longGrid.map((val) => {
		return <Block key={key++} val={val} />;
	});

	let rowString = "";
	for (let i = 0; i < width; i++) {
		rowString += "1fr ";
	}

	return (
		<div
			className="GameGrid"
			style={{
				display: "grid",
				gridGap: "2px",
				gridTemplateColumns: rowString,
			}}
		>
			{renderedGrid}
		</div>
	);
};

export default GameGrid;
