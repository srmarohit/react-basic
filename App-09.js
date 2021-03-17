import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <h1>NavBar</h1>
            <Link to="/about">About</Link><br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar;