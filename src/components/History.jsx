import React from "react";
import { useState } from "react";
import poppyTapes from "../models/highlights";
import statPic from "../images/stats.png";

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
      <div className="historyContainer">
        <img
          className="hofImg"
          src="https://www.njboxinghof.org/wp-content/uploads/2014/12/DERRICK-POPPY-ROLAN-764x1024.jpg"
        />

        <div className="description">
        <h2 style={{color:"rosybrown"}}>Honored on November 14, 1986 (NJ Boxing Hall of Fame) </h2>
        Elizabeth, New Jersey, USA <hr/> Born: August 17, 1968
   
          Derrick Poppy Rolon's focus at Strictly Boxing is to interview boxers
          both amateur and professional. Poppy Rolon also seeks out fans of
          Boxing and solicits their opinion on fighters and upcoming fights
        </div>
      </div>
    </div>
  );
}

export default History;
