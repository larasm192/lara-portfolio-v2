import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="gradient-bar">
            <div className="logo">
                <Link to="/">
                    <img src="assets/logo.svg" alt="LSM" />
                </Link>
            </div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
