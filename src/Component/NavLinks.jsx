import { Link } from "react-router-dom"
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
const NavLinks = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const toggler = () => setToggleNav(preNav => !preNav)
    
    return (
        <>
            <header>
                <h1>Salone Plasas</h1>
                <nav className={`nav ${toggleNav ? "active"  : null}`}>
                    <ul>
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link> 
                        <Link to={"/recipes-page"}>
                            <li>Recipes</li>   
                        </Link>      
                       
                        <Link to={"/addRecipes-page"}>
                            <li>Add Recipe</li>
                        </Link>       
                    </ul>
                </nav>
                <AiOutlineBars className="Iconbars" onClick={toggler} />
            </header>
        </>
    );
}

export default NavLinks;
