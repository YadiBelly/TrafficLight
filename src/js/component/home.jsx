import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	return (
		<div className="trafficLight">
			<div
				className={color == "red" ? "redLight redNormal" : "redNormal"}
				onClick={() => setColor("red")}></div>
			<div
				className={
					color == "yellow"
						? "yellowLight yellowNormal"
						: "yellowNormal"
				}
				onClick={() => setColor("yellow")}></div>
			<div
				className={
					color == "green" ? "greenLight greenNormal" : "greenNormal"
				}
				onClick={() => setColor("green")}></div>
		</div>
	);
};

export default Home;
