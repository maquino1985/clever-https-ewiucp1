import React from "react";
// import { FaUser } from "react-icons/fa";
import {FaUser} from "react-icons/fa"
interface NavbarProps {
  userLoggedIn: boolean;
  onLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userLoggedIn, onLogin }) => {
  return (
    <nav>
      <div className="logo">
        <h1>My App</h1>
      </div>
      <div className="user">
        {userLoggedIn ? (
          <img src="user-avatar.jpg" alt="User avatar" />
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
        <FaUser className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;