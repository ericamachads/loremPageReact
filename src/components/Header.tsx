import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="menu">
      <NavLink to='/' className='logo'><h1>LOGO</h1></NavLink>
      <div className="menuItems">
        <NavLink to='/' className='menuItem'>Home</NavLink>
        <NavLink to='/' className='menuItem'>About</NavLink>
        <NavLink to='/' className='menuItem'>Contacts</NavLink>
      </div>
      <div className="menuButtons">
        <button className="buttonPrimary">Primary</button>
        <button className="buttonSecondary">Secondary</button>
      </div>
    </header>
  )
}

export default Header