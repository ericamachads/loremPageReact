import { FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to='/' className='logo'><h1>LOGO</h1></NavLink>
      <div className="socialMedias">
        <NavLink to='https://www.instagram.com/' target='_blank'>
          <InstagramLogo size={32} weight="fill" />
        </NavLink>
        <NavLink to='https://www.facebook.com/' target='_blank'>
          <FacebookLogo size={32} weight="fill" />
        </NavLink>
        <NavLink to='https://wa.me/351929392019' target='_blank'>
          <WhatsappLogo size={32} weight="fill" />
        </NavLink>
      </div>
      <div className="menuItems">
        <NavLink to='/' className='menuItem'>Home</NavLink>
        <NavLink to='/' className='menuItem'>About</NavLink>
        <NavLink to='/' className='menuItem'>Contacts</NavLink>
      </div>
      <p>&copy; 2024 All rights reserved.</p>
    </footer>
  )
}

export default Footer