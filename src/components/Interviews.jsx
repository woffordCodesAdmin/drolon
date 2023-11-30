import React from "react";
import { Link } from "react-router-dom";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ROY":
      return {
        currentSource: 'https://www.youtube.com/embed/umTyl9mBG7M?si=S325UlWpfRjGUns0'
      };
    case "SHAKUR":
      return {
        currentSource: 'https://www.youtube.com/embed/HV-hF0qcvf8?si=dZOhwBjGOEeCnMK_'
      };
    case "DJAMES":
      return {
        currentSource: 'https://www.youtube.com/embed/kzL91TYqbic?si=Ur9vDJp0TsWGiHDk'
      };
    case "TWEEKS":
      return {
        currentSource: 'https://www.youtube.com/embed/30O-FYKRDQQ?si=Maa5mINQSUIPOqse'
      };
    case "HDOCK":
      return {
        currentSource: 'https://www.youtube.com/embed/rISfo6o5WG0?si=d-rcHsqB6XMEt4DM'
      };
    case "LHAZZARD":
      return {
        currentSource: 'https://www.youtube.com/embed/dFFfIySSqfg?si=X_gEvZWnf6hBjfw9'
      };
    case "SCANAL":
      return {
        currentSource: 'https://www.youtube.com/embed/KMrHb_Z1QZ8?si=Ayv9ChZXgpsN34az'
      };
      case "UNCJEFF":
      return {
        currentSource: 'https://www.youtube.com/embed/Iyo5XKv9tpw?si=UM84r_nzMyIPRZ9n'
      };
    default:
      return state;
  }
};

function Interviews() {
  const [state, dispatch] = useReducer(reducer, {
    currentSource: "",
  });
  return (
    <div>
      <div>
        <div className="cinemaContainer">
        <div className="btnContainer">
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "ROY" });
              }}
            >
              Roy Jones
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "SHAKUR" });
              }}
            >
              Shakur Stevenson
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "DJAMES" });
              }}
            >
              Derrick James
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "TWEEKS" });
              }}
            >
              Tony Weeks
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "HDOCK" });
              }}
            >
              Harvey Dock
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "LHAZZARD" });
              }}
            >
              Larry Hazzrd
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "SCANAL" });
              }}
            >
              Shamar Canal
            </div>
            <div
              className="btnTag"
              onClick={() => {
                dispatch({ type: "UNCJEFF" });
              }}
            >
              'Uncle Jeff' Mayweather
            </div>
          </div>
          <div className="screen">
            <div className="miniscreen">
              <iframe className="framer" src={state.currentSource}></iframe>
            </div>

            <Link to="https://www.youtube.com/@StrictlyboxingwithDerrickRolon/videos">
              <div>See More at Strictly Boxing</div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Interviews;
