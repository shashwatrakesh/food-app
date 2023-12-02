import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [buttonName, setButtonName] = useState("Login");

  const authenticateUser = () => {
    //make API call to check authentication
    //check === true ? setCheck(false) : setCheck(true);
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="title">
        <h1>{title}</h1>
        <button
          onClick={() => {
            if (title.toLocaleLowerCase() === "food villa")
              setTitle("Food Villa2");
            else setTitle("Food Villa");
          }}
        >
          Click to update Title
        </button>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={authenticateUser}>{buttonName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
