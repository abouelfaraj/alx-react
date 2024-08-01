import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import Login from "../Login/Login.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";

function App() {
  return (
	<React.Fragment>    
	  <Notifications />
	  <div className="App">
	  	<Header />
	  	<Login />
	  	<Footer />
	  </div>
	</React.Fragment>
  );
}

export default App;
