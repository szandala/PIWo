import { NavLink } from "react-router-dom";

const Menu = () => {
    return <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/introduce-self">Introduce Self</NavLink>
    </nav>
}

export default Menu;
