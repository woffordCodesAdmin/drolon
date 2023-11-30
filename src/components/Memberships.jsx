import React from "react";

function Memberships() {
  return (
    <div>
      <div>
        <div className="splitContainer">
          <h1 className="joina">
            SIGN-UP TO BOOK YOUR FREE NEW MEMBERS SESSION TODAY
          </h1>
          <img
            src="https://images.unsplash.com/photo-1593352216894-89108a0d2653?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="regPic"
          />

          <div className="packageContainer">
            <div className="tier">
              {" "}
              Silver Member
              <div className="pricePoint"> $90</div>
              <img
                src="https://cdnl.iconscout.com/lottie/premium/thumb/silver-trophy-4942533-4123735.gif"
                alt=""
                className="star"
              />
              <div className="pricePointSM"> Training for 12 Sessions</div>
            </div>
            <div className="tier">
              Gold Member
              <div className="pricePoint"> $175</div>
              <img
                src="https://cdnl.iconscout.com/lottie/premium/thumb/champion-trophy-4942534-4123736.gif"
                alt=""
                className="star"
              />
              <div className="pricePointSM"> Training for 8 Sessions</div>
            </div>

            <div className="tier">
              Diamond Member
              <div className="pricePoint"> $250</div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/518ee9e6e4b02c1428e17e12/1656543623122-SSLXX7NKE8DVB3JNAGFA/20220629_173228.gif"
                alt=""
                className="star"
              />
              <div className="pricePointSM"> Training for 20 Sessions</div>
            </div>
          </div>
         
        </div>
        {/* private lessons */}

        {/* contact form */}
      </div>
    </div>
  );
}

export default Memberships;
