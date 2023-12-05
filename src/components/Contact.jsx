import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
      <div className="mediaHolder">
       <Link to="www.facebook.com"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" className="smediaIcon" /></Link>

       <Link to="www.instagram.com"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" className="smediaIcon" /></Link>

       <Link to="www.youtube.com"> <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="" className="smediaIcon" /></Link>

       <Link to="www.strictlyboxing.net"> <img src="https://pngimg.com/d/phone_PNG48988.png" alt="" className="smediaIcon" /></Link>
     
      </div>
    </div>
  )
}

export default Contact
