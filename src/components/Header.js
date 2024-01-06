import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [buttonName, setButtonName] = useState("Login");

  const authenticateUser = () => {
    //make API call to check authentication
    //check === true ? setCheck(false) : setCheck(true);
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInuser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-slate-400 sm:bg-yellow-50 lg:bg-green-100">
      <div>
        <img className="w-56" src={LOGO_URL} />
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

      <div>
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <p>Online Status: {onlineStatus ? "✅" : "🛑"}</p>
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <li>
            <button onClick={authenticateUser}>{buttonName}</button>
          </li>
          <li className="px-2 font-bold">
            <button>{loggedInuser}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
