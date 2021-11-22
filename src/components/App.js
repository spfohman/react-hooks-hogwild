import React, {useState} from "react";
import Nav from "./Nav";
import HogCard from './HogCard';
import hogs from "../porkers_data";
import Title from './Title';
import Button from './Button'

function App() {

	console.log(hogs.map(hog=>{
		return hog.name
	}).sort())
	console.log(hogs.map(hog=>{
		return hog.weight
	}).sort())
	console.log(hogs.filter(hog=> hog.greased === true)) //.map((hog)=>hog.greased))
	
	const [weight, setSortWeight] = useState(0)
	const [name, setSortName] = useState('')
	const [greased, setSortGreased] = useState(false)


	function sortWeight(){
		console.log('click weight')
		setSortWeight(hogs.map(hog=>{
			return hog.weight
		}).sort())
	}
	function sortName(){
		console.log('click name')
		setSortName(hogs.map(hog=>{
			return hog.name
		}).sort())
	}
	function isGreased(){
		console.log('clicked greased')
		 setSortGreased(hogs.filter(hog=> hog.greased === true).map((hog)=>hog.greased))
	}
	
	return (
		<div className="App">
			<Nav />
			<Title />
			<Button name={'Sort by weight'} onClick={sortWeight}/>
			<Button name={'Sort by name'} onClick={sortName}/>
			<Button name={'Filter by greased'} onClick={isGreased} />
			<HogCard hogs= {hogs}/>
			
		</div>
	);
}

export default App;
