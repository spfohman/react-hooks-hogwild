import React from 'react';

function ExtraInfo({greased, weight, heighestMedal}){
    
return(
    <div>
        <p>{greased ? 'Greased': 'Nongreased'}</p>
        <p>Highest medal: {heighestMedal}</p>
        <p>Weight: {weight} lbs</p>
    </div>
)
}
export default ExtraInfo;