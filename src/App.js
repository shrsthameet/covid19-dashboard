import React from "react";
import "./App.less";
import {Switch, Route} from "react-router-dom";
import NavigationComponent from "./navigation/containers/Navigationcomponent";
import HomePage from "./layouts/HomePage";

function App() {
	return (
		<>
			<NavigationComponent/>
			<Switch>
				<Route path="/" exact component={HomePage}/>
			</Switch>
		</>
	);
}

export default App;
