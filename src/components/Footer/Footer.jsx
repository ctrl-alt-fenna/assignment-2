import React from 'react'
// import some logos for footer
import Email from '../../../src/img/Email.png'
import Facebook from '../../../src/img/Facebook.png'
import Gitlab from '../../../src/img/Gitlab.png'
import Instagram from '../../img/Instagram.png'
import Linkedin from '../../../src/img/Linkedin.png'
import Location from '../../../src/img/Location.png'
import Phone from '../../../src/img/Phone.png'
import Twitter from '../../../src/img/Twitter.png'

const Footer = () => {
	return (
		<footer className="footer">
				<>
          <div className='about-us'>
            <h3>About Us</h3>
            <p id='text-about-us'>Enjoy talking to millions of people across the globe and learn about their cultures! Be the one who goes over the limits and breaks the language barrier! Using our web now for free!</p>
            <em id='copyright'>Ⓒ Copyright 2022</em>
          </div>

          <div className='contact'>
            <h3>Contact</h3>
              <div className='location'>
                <img src={Location} alt='Location icon'></img>
                <p>Experis, Gouda, Holland</p>
              </div>
              <div className='phone'>
                <img src={Phone} alt='phone icon'></img>
                <p>+31 123 456 789</p>
              </div>
              <div className='email'>
                <img src={Email} alt='email icon'></img>
                <p>accelerate@candidate.noroff.com</p>
              </div>
          </div>

          <div className='social-icons'>
              <a href='https://www.linkedin.com/company/experis/jobs?trk=nav_type_jobs'><img src={Linkedin} alt='Linkedin' title='Linkedin'className='icons'></img></a>
              <a href='https://gitlab.com/linhmillion/assignment2-react'><img src={Gitlab} alt='Gitlab' title='Gitlab' className='icons'></img></a>
              <a href='https://www.facebook.com/noroff/'><img src={Facebook} alt='Facebook' title='Facebook' className='icons'></img></a>
              <a href='https://www.instagram.com/'><img src={Instagram} alt='Instagram' title='Instagram' className='icons'></img></a>
              <a href='https://twitter.com/?lang=en'><img src={Twitter} alt='Twitter' title='Twitter' className='icons'></img></a>

          </div>

        </>
		</footer>
	)
}
export default Footer
