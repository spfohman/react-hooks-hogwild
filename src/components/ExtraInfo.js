import React from 'react';

function ExtraInfo({hogs}){
    const{greased, weight, "highest medal achieved": medal}=hogs
    console.log(hogs)
    
return(
    <div>
        <p>{greased ? 'Greased': 'Nongreased'}</p>
        <p>Highest medal: {medal}</p>
        <p>Weight: {weight}</p>
    </div>
)
}
export default ExtraInfo()