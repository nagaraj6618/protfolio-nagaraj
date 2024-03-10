import React from 'react'

function Clock({hourRatio, minuteRatio, secondRatio}) {




    return (
        
      <div className="clock">
        <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
        <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}  ></div>
        <div className="hand second"style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}  ></div>
      
    </div>
    
    )
    
}


export default Clock
