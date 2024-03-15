import css from "./header.module.css";
import {NavLink} from "react-router-dom";
const Header =()=>{
    return(
        <header>
        <div className={css.container}>
            <nav>
                <ul className={css.list}>
                    <li> <NavLink to="/" className={css.link}>Shop</NavLink></li>
                    <li> <NavLink to="/cart" className={css.link}>Shopping Cart</NavLink></li>
                    </ul>
               
            </nav>
        </div>
        </header>
    )
}
export default Header;