import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import logo from '../../images/logo.png';
import "../Header/Navbar.css";


const useStyles = makeStyles(theme => ({
 
    logo: {
      height: '2em',
      [theme.breakpoints.down("md")]: {
        height: "2em"
      },
      [theme.breakpoints.down('xs')]: {
        height: "1.5em"
      }
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: "transparent"
      }
    }
  }))
  


function NavBar() {
  const [click, setClick] = useState(false);
  const classes=useStyles()

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" >
          <img alt="company logo" className={classes.logo} src={logo} />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
       
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
