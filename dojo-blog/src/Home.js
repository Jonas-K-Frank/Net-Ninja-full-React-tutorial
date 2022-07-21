import { useState } from "react";

const Home = () => {
	// let name = "Mario";
	const [name, setName] = useState("Mario");

	const clickHandler = () => {
		setName("Luigi");
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>{name}</p>
			<button onClick={clickHandler}>Click me</button>
		</div>
	);
};

export default Home;
