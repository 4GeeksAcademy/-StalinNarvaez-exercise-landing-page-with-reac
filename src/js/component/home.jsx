import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Cards from "./card.jsx";
import Jumbutron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (		
			<>
				<Navbar />
				<Jumbutron />
				<Cards />
				<Footer />
			</>
	);
};

export default Home;
