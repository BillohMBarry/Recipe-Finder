import { useState } from "react";
import { Link } from "react-router-dom";
import favoritePlain from "../assets/favoriteplain.png"
import heartsfill from "../assets/heartsfill.png"
import data from "../data";


const Recipes = () => {
    const [recipesItem, setRecipesItem] = useState(data)
   const [favourite, setFavourite] = useState({})
   const [searchRecipe, setSearchRecipe] = useState(data)

    // search functionality
    const searchName = (event) => {
       const search = event.target.value.toLowerCase()
       const searchNames = searchRecipe.filter(byNames => byNames.name.toLowerCase().includes(search))
       setRecipesItem(searchNames)
       
    }
    // like and dislike functionality
    const Icons = (RecipeID) => {
      setFavourite(preFav => ({
        ...preFav,
        [RecipeID]: !preFav[RecipeID]
      }))
       console.log(favourite)
    }
    return (
        <> 
                <div className="hero">
                    <h2 className="headings">Salone Dishes Finder</h2>
                    <div className='searchField'>
                    <button className='searchIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                        <input type="text" placeholder='eg cassava-leaf' id="searchInput" onChange={searchName}  />
                    </div>
                </div>
            <div className="recipe-container">  
                 { /*  rendring the recipes */ }
                {recipesItem && recipesItem.map(recipe => (
                    <div className="recipes" key={recipe.id}>
                        
                        <img src={recipe.imageUrl} alt={recipe.alt}/>
                        <div className="others">
                            <Link to={`/details/${recipe.id}`}>
                                <h3>{recipe.name}</h3>
                            </Link>
                            <p style={{textAlign: "justify"}}>{recipe.description}</p>
                        </div>
                        <button style={{border: "none", background: "transparent"}} onClick={() => Icons(recipe.id)}>
                            <img src={favourite[recipe.id] ? heartsfill : favoritePlain} alt=""  className="Icons-img"/>
                        </button>
                    </div>
                )) } 
            </div>
           
       
        </>
    );
}
//     () => setFavourite(preFav => ({...preFav, 
// [recipe.id]: !preFav[recipe.id]}))
export default Recipes;
