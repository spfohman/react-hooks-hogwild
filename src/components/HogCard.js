import React from 'react';
import ExtraInfo from './ExtraInfo'

function HogCard({hogs, onClick}){
    console.log(hogs)
    const eachPig = hogs.map((pig)=>{
        return(
            <div key= {pig.name}>
                
                <h1>Name: {pig.name}</h1>
                <img alt='pigPic' src={pig.image} onClick = {onClick}/>
            </div>
            
        )
    })
    return(
        <>
            <ExtraInfo hogs={hogs}/>
            {eachPig}
        </>
    )
}
export default HogCard;