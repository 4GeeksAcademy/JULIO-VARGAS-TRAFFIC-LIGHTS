import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [luzRoja, setLuzRoja] = useState("")
	const [luzVerde, setLuzVerde] = useState("")
	const [luzAmarilla, setLuzAmarilla] = useState("")

	function encender(color) {
		if (color == "red") { setLuzRoja("encendido"); setLuzVerde(""); setLuzAmarilla("") }
		else if (color == "green") { setLuzVerde("encendido"); setLuzRoja(""); setLuzAmarilla("")}
		else if (color == "yellow") { setLuzAmarilla("encendido"); setLuzVerde(""); setLuzRoja("")}
	}


	return (
		<div className="main">
			<div className="barraNegra"></div>
			<div className="semaforo">
				<div className={`red ${luzRoja}`}
					onClick={() => encender("red")}
				></div>
				<div className={`yellow ${luzAmarilla}`}
					onClick={() => encender("yellow")}
				></div>
				<div className={`green ${luzVerde}`}
					onClick={() => encender("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;
