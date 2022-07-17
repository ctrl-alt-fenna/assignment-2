import { NavLink, Navigate } from "react-router-dom"

// import some logo for footer
import Email from "../../../src/img/Email.png"
import Gitlab from "../../../src/img/Gitlab.png"
import Heroku from "../../../src/img/Heroku.png"
import Linkedin from "../../../src/img/Linkedin.png"
import Location from "../../../src/img/Location.png"
import Phone from "../../../src/img/Phone.png"
import React from "react"
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete } from '../../utils/storage';
import { useUser } from "../../context/UserContext"

// src/img/Location.pngimport Location from "../../../src/img/Location.png"


const Footer = () => {
	const { user, setUser } = useUser()
	/*	Function to logout user from navbar click
		INPUT: None
		OUTPUT: Clears localstorage from any userdata and redirects to login page
	*/
	const handleLogoutClick = () => {
		if (window.confirm('Are you sure you want to log out?')) {
			storageDelete(STORAGE_KEY_USER)
			setUser(null)
			return <Navigate to='/' />
		}
	}

	return (
		<footer>
			{user !== null &&
				<>
          <div className="about-us">
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus magnam cumque molestiae, vero incidunt unde ab corporis. A quam, mollitia blanditiis maxime in alias laudantium omnis fugiat quae consequatur.</p>

            <div className="social-icons">
              <a href="#"><img src={Linkedin} alt="Linkedin" title="Linkedin"class="icons"></img></a>
              <a href="#"><img src={Heroku} alt="Heroku" title="Heroku" class="icons"></img></a>
              <a href="#"><img src={Gitlab} alt="Gitlab" title="Gitlab" class="icons"></img></a>
				    </div>


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


        </>
			}
		</footer>
	)
}
export default Footer
