import React, {useState} from "react";
import Nav from "./Nav";
import HogCard from './HogCard';
import hogs from "../porkers_data";
import Title from './Title';


function App() {
	const[showInfo, setShowInfo]= useState(false);

	function showPigInfo(){
		console.log('a click function')
		setShowInfo(!showInfo);
	}
	return (
		<div className="App">
			<Nav />
			<Title />
			<HogCard hogs= {hogs} onClick={showPigInfo}/>
			
		</div>
	);
}

export default App;
