import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <header>
                <h1>Salone Plasas</h1>
                <nav>
                    <ul>
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link> 
                            <Link to={"/recipes-page"}>
                                <li>Recipes</li>   
                            </Link>      
                        <Link to={"/approvals-page"}>
                            <li>Approval</li>
                        </Link>
                        <Link to={"/addRecipes-page"}>
                            <li>Add Recipe</li>
                        </Link>       
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavLinks;
