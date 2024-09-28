import { useState,useRef,useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { faUser, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { auth } from "../../utils/firebase";
import { Avatar } from "antd";

function Navbar() {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const {user} =useContext(AuthContext)



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
      if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.from(menuRef.current, {
        duration: 0.5,
        ease: "power3.out",
        x: "100%",
      })}else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          ease: "power3.in",
        });
   
      }
    }, [isOpen]);
  return (
    <div >

      <div className="main-navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div  ref={menuRef} className={`pages-link ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        {auth.currentUser ? (
          <div className="Navbar-Account">
          <div className="account-button">
            <Link to={"/about"}>
              <Avatar src={user?.photoUrl} />
            </Link>
          </div>
          </div>
        ):(<div className="Navbar-Account">
          <Link to="./Signin">
          <button className="account-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
          </Link>
        </div>
      )}
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;