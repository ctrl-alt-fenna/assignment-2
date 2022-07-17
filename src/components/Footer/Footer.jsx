// import some logo for footer
import Email from "../../../src/img/Email.png"
import Gitlab from "../../../src/img/Gitlab.png"
import Heroku from "../../../src/img/Heroku.png"
import Linkedin from "../../../src/img/Linkedin.png"
import Location from "../../../src/img/Location.png"
import Phone from "../../../src/img/Phone.png"
import React from "react"

// src/img/Location.pngimport Location from "../../../src/img/Location.png"


const Footer = () => {
	return (
		<footer>
				<>
          <div className="about-us">
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus magnam cumque molestiae, vero incidunt unde ab corporis. A quam, mollitia blanditiis maxime in alias laudantium omnis fugiat quae consequatur.</p>
            <em>Ⓒ copy right 2022</em>
          </div>

          <div className="contact">
            <h3>Contact</h3>
              <div className="location">
                <img src={Location} alt="Location icon"></img>
                <p>Experis, Gouda, Holland</p>
              </div>
              <div className="phone">
                <img src={Phone} alt="phone icon"></img>
                <p>+31 615 641 648</p>
              </div>
              <div className="email">
                <img src={Email} alt="email icon"></img>
                <p>Accelebrate@candidate.noroff.com</p>
              </div>
          </div>

          <div className="social-icons">
              <a href="https://www.linkedin.com/company/experis/jobs?trk=nav_type_jobs"><img src={Linkedin} alt="Linkedin" title="Linkedin"class="icons"></img></a>
              <a href="https://dashboard.heroku.com/apps/assignment2-react-linh"><img src={Heroku} alt="Heroku" title="Heroku" class="icons"></img></a>
              <a href="https://gitlab.com/linhmillion/assignment2-react"><img src={Gitlab} alt="Gitlab" title="Gitlab" class="icons"></img></a>
				    </div>


        </>
		</footer>
	)
}
export default Footer
