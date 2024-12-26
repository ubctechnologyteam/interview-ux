import React,{useState} from 'react';




const Navbar = () => {
const[isOpen , setIsOpen] = useState(false);

const  toggleMenu =()=>{
  setIsOpen(!isOpen);
}

  return (
    <nav className="navbar">
        <div className ="logo">Logo Name</div>
        <button className="hamburgerMenu" onClick = {toggleMenu}>☰</button>

        {/* <ul className={`nav-links:${isOpen ?'open' :''}`}> */}
          <ul className="nav-links">
            <li> <a href="#home"> Home</a></li>
            <li> <a href="#feature"> Feature </a></li>
            <li> <a href="#contact"> Contact </a></li>

        </ul>
 
    </nav>
  )
}

export default Navbar
