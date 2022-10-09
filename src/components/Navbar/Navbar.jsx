import React, { useContext } from "react";

import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const navbar = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
 <div className="toggle-mains" style={{ background: darkMode ? "black" : "" }}>
  <div className="toggle-main" >
  <Toggle />
  </div>
 

 </div>
  );
};

export default navbar;