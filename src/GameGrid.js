import React, { useEffect, useState } from "react";

import Block from "./Block";
import Button from "./Button";

const GameGrid = ({ width, height, refresh }) => {
	const [grid, setGrid] = useState([[{ val: 0, x: 0, y: 0 }]]);
	const [run, setRun] = useState(false);

	// function that creates an empty grid
	const emptyGrid = () => {
		const tempGrid = [];
		for (let i = 0; i < height; i++) {
			const tempRow = [];
			for (let j = 0; j < width; j++) {
				const node = {
					val: 0,
					x: j,
					y: i,
				};
				tempRow.push(node);
			}
			tempGrid.push(tempRow);
		}
		return tempGrid;
	};

	// set up grid for initial grid
	useEffect(() => {
		const tempGrid = emptyGrid();
		setGrid(tempGrid);
	}, []);

	//handle iterations once started
	useEffect(() => {
		if (!run) return;

		const copyGrid = [];

		for (let i = 0; i < height; i++) {
			const copyRow = [];

			for (let j = 0; j < width; j++) {
				let neighbours = 0;

				const im = i - 1,
					ip = i + 1,
					jm = j - 1,
					jp = j + 1;

				if (im >= 0 && grid[im][j].val === 1) {
					neighbours++;
				}

				if (ip < height && grid[ip][j].val === 1) {
					neighbours++;
				}

				if (jm >= 0 && grid[i][jm].val === 1) {
					neighbours++;
				}

				if (jp < width && grid[i][jp].val === 1) {
					neighbours++;
				}

				if (im >= 0 && jm >= 0 && grid[im][jm].val === 1) {
					neighbours++;
				}

				if (im >= 0 && jp < width && grid[im][jp].val === 1) {
					neighbours++;
				}

				if (ip < height && jp < width && grid[ip][jp].val === 1) {
					neighbours++;
				}

				if (ip < height && jm >= 0 && grid[ip][jm].val === 1) {
					neighbours++;
				}

				const block = grid[i][j];
				let val = block.val;

				if (val === 1) {
					if (neighbours < 2 || neighbours >= 4) {
						val = 0;
					}
				} else {
					if (neighbours === 3) {
						val = 1;
					}
				}

				copyRow.push({ x: j, y: i, val });
			}
			copyGrid.push(copyRow);
		}
		setTimeout(() => setGrid(copyGrid), refresh);
	}, [grid, height, refresh, run, width]);

	//function to create random grid
	const randomizeGrid = () => {
		if (run) return;

		const tempGrid = [];
		for (let i = 0; i < height; i++) {
			const tempRow = [];
			for (let j = 0; j < width; j++) {
				tempRow.push({
					val: Math.round(Math.random()),
					x: j,
					y: i,
				});
			}
			tempGrid.push(tempRow);
		}
		setGrid(tempGrid);
	};

	// function to empty grid
	const resetGrid = () => {
		if (run) return;

		const tempGrid = emptyGrid();
		setGrid(tempGrid);
	};

	// create long array for formatting with css
	let longGrid = [];
	grid.forEach((row) => {
		longGrid = [...longGrid, ...row];
	});

	// method to update grid in blocks
	const updateGrid = (x, y, val) => {
		if (run) return;

		const copyGrid = [];
		for (let i = 0; i < height; i++) {
			const copyRow = [...grid[i]];
			copyGrid.push(copyRow);
		}
		copyGrid[y][x] = { x, y, val };
		setGrid(copyGrid);
	};

	// render blocks with key
	let key = 0;
	const renderedGrid = longGrid.map((block) => {
		return <Block key={key++} block={block} updateGrid={updateGrid} />;
	});

	// setup formatting string for css style for grid
	let rowString = "";
	for (let i = 0; i < width; i++) {
		rowString += "1fr ";
	}

	// jsx
	return (
		<div
			className="page"
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 5fr 1fr",
			}}
		>
			<div
				className="controls"
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Button onClick={() => setRun(true)} text="Start" />
				<Button onClick={() => setRun(false)} text="Stop" />
				<Button onClick={resetGrid} text="Reset" />
				<Button onClick={randomizeGrid} text="Random" />
			</div>
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
		</div>
	);
};

export default GameGrid;
