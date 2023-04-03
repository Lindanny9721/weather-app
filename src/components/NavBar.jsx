

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/search">Search</Link>
        <Link to="/DayDetail">Info</Link>
      </nav>
    </div>
  );
};

export default Navbar;

