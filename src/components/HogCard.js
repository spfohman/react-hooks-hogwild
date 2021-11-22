import React, {useState} from 'react';
import ExtraInfo from './ExtraInfo'

function HogCard({hogs}){
    const[showInfo, setShowInfo]= useState(false);

	function showPigInfo(){
		setShowInfo(!showInfo);
	}
    
    const eachPig = hogs.map((pig)=>{
        
        return(
            <div key= {pig.name}>
                
                <h1>Name: {pig.name}</h1>
                <img alt='pigPic' src={pig.image} onClick = {()=>showPigInfo()}/>

                {showInfo? <ExtraInfo greased={pig.greased} weight={pig.weight} highestMedal={["highest medal achieved"]}/> : null}
            </div>
            
        )
    })
    return(
        <>
            
            {eachPig}
        </>
    )
}
export default HogCard;