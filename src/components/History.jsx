import React from "react";
import { useState } from "react";
import poppyTapes from "../models/highlights";
import statPic from "../images/stats.png";
import LifeAfterBoxing from "../components/LifeAfterBoxing"

function History() {
  const [count, setCount] = useState(0);

  const [currentReel, setCurrentReel] = useState(poppyTapes[count]);

  const increaseCount = () => {
    setCount(count + 1);
    console.log(count, "-- COUNT");
    setCurrentReel(poppyTapes[count]);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    console.log(count, "-- COUNT");
    setCurrentReel(poppyTapes[count]);
  };
  return (
    <div>
      <h3>Meet The Man Behind the Vision</h3>
      <h1 className="nameSeq">Derrick "Poppy" Rolon</h1>
      <h3>New Jersey's Own Hall Of Fame Inductee</h3>
      
      <div className="historyContainer">
       

        <div className="description">
        <h2 style={{color:"rosybrown"}}>Honored on November 14, 1986 (NJ Boxing Hall of Fame) </h2>
        Elizabeth, New Jersey, USA <hr/> Born: August 17, 1968
   
          Derrick Poppy Rolon's focus at Strictly Boxing is to interview boxers
          both amateur and professional. Poppy Rolon also seeks out fans of
          Boxing and solicits their opinion on fighters and upcoming fights
        </div>
        <img
          className="hofImg"
          src="https://www.njboxinghof.org/wp-content/uploads/2014/12/DERRICK-POPPY-ROLAN-764x1024.jpg"
        />
      </div>
      <div className="smContainer">
        <iframe className="reelest" src={currentReel} />
      </div>
      <div className="clicker">
        <button className="caroBtn" onClick={decreaseCount}>
          Prev
        </button>
        <img
          src="https://media1.giphy.com/media/efaB8eipdYqiy2b3Kn/giphy.gif"
          alt=""
          className="belt"
        />
        <button className="caroBtn" onClick={increaseCount}>
          More
        </button>
      </div>
      <LifeAfterBoxing/>


    </div>
  );
}

export default History;
