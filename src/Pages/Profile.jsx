import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {FaGithub, FaMedium, FaTwitter} from "react-icons/fa"


function Profile({

  
  
  imgSrc = "./My-github-Image.png",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  medium_username, 
  html_url,
}) {
  return (
    <>
    <HelmetProvider>
      <title>My Github Portfolio</title>
      <meta name="description" content="Frontend Developer" />
      <link rel="canonical" href="http://localhost:5173/portfolio/" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src="./My-github-Image.png" alt="Me" />
      </div>
      <h1 alt="profile name">Adekunle Itunuoluwa</h1>
      </div>
      <div id="profile-details">
        <div className="bio">
        <p>
            I'm a Software Engineer, Content Creator, and Community Engineer who currently works as a Developer Advocate at Commerce Layer. I'm passionate about sharing knowledge, documentation, web engineering, Jamstack, headless commerce, and others.

            😊 Pronouns: She/her
            💡 Fun fact: I'm currently studying at AltSchool Africa School of Software Engineering Class of 2023.
            🌱 I'm currently learning JavaScript, Reactjs, and Python.
            😊 I'm looking for help with open source projects, hackathons, internships, and entry-level opportunities.
            💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).
            📫 You can view my resume and contact me by emailing itunuoluwafelicia@gmail.com.
        </p>
          <a href="https://github.com/users/itunugirl">My github profile</a>
          </div>
          <div className="location">
          <p>Online</p>
          </div>
       
        <div>
        <a href="https://github.com/itunugirl">
          <button className="buttons"><FaGithub/> GitHub<i className="fa-brands fa-github"></i></button>
        </a>
        </div>
        <div>
        <a href=" https://medium.com/@ADEKUNLEITUNUOLUWA">
        
        <button className="buttons"><FaMedium/> Medium<i className="fa-brands fa-medium"></i></button>
      </a>
        
        </div>
         
         <div>
        <a href="https://twitter.com/ITUNUTECHGIRL/">
          <button className="buttons"><FaTwitter/> Twitter<i className="fa-brands fa-twitter"></i></button>
        </a>
        </div>

        <a href="https://github.com/itunugirl?tab=following">
            <button className="buttons">Following: 1</button>
          </a>
      </div>
      <a href="https://github.com/itunugirl?tab=followers">
            <button className="buttons">
              Followers: 0
            </button>
          </a>
     
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;