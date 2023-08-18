import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/secret">Secret page</NavLink>
            <button>Login</button>
        </nav>
    )
}

export default Nav