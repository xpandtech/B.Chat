import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.png';
import './NavbarStyle.css'


    const Navbar = () => {
        const[click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
        

        const [color, setColor] = useState(false)
            const changeColor =() => {
                if(window.scrollY >= 100) {
                    setColor(true)
                } else {
                    setColor(true)
                }
            }

            window.addEventListener('scroll', changeColor)

        return (
            <nav class="navbar navbar-expand-lg  navbar-light shadow-5-strong">
            <div class="container-fluid">
              <a class="navbar-brand" ><img src={Logo}/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon white"></span>
              </button>
              <div class=" navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown">
                <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                  <li class="nav-item"color='white'>
                    <a class="nav-link active" aria-current="page"  > <Link to='/Inbox'>Inbox</Link></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                      About Us
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" ><Link to='/Broascast'>Broadcast</Link></a></li>
                      <li><a class="dropdown-item" ><Link to='/Outbox'>Outbox</Link></a></li>
                      <li><button><Link to='/Outbox'>Outbox</Link>LogIn</button></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }

export default Navbar;