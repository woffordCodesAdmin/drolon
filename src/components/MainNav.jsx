import React from "react";
import { Link } from "react-router-dom";
function MainNav() {
  return (
    <>
      <div className="nav">
        <div className="navTab">
        <h1 className="title">𝔖𝔱𝔯𝔦𝔠𝔱𝔩𝔶 𝔅𝔬𝔵𝔦𝔫𝔤</h1>
          <Link to="/history"><div className="tab">About</div></Link>
          <Link to="/interviews"><div className="tab">Interviews</div></Link>
          <Link to="/memberships"><div className="tab">Memberships</div></Link>
          <Link to=""><div className="tab">Contact</div></Link>
        </div>
      </div>
      
      <img src="https://images.unsplash.com/photo-1607702713064-0143212236ae?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="topPic" />
      
    </>
  );
}

export default MainNav;
