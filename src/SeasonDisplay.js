import React from 'react';
import './SeasonDisplay.css';
const getSeason=(lat,month)=>{
  if(month>2&&month<9)
  {
      if(lat>0) return 'summer';
      else return 'winter';
  }
  else if(lat>0) return 'winter';
  else return 'summer';
}

const SeasonDisplay=(props)=>{
    const season=getSeason(props.latOfMyPos,new Date().getMonth());
    const text= season==='winter'?"Burr...It's chilly":"Let's hit the beach";
    const iconName=season==='winter'?"snowflake":"sun";
    return(
        <div className={`season-display ${season}`}>
            <i className={`massive ${iconName} loading icon icon-left`}></i>
              <h1>{text}</h1>
            <i className={`massive ${iconName} loading icon icon-right`}></i>
            </div>
    );
}

export default SeasonDisplay;