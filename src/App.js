import React from "react";

import GameGrid from "./GameGrid";

const App = () => {
	return (
		<div
			className="App"
			style={{
				position: "fixed",
				padding: "0",
				margin: "0",

				top: "0",
				left: "0",
				height: "100%",
				width: "100%",

				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<GameGrid height={20} width={25} refresh={1000} />
		</div>
	);
};

export default App;
