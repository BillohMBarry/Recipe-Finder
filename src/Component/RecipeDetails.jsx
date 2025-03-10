import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import data from '../data';
import Comment from './Comment'
import Voting from './Voting';

/**
 * The `RecipeDetails` component is responsible for rendering the details of a recipe, including its image, name, description, ingredients, preparation methods, and a voting poll for users to rate the authenticity of the recipe.
  * The component uses the `useParams` hook from `react-router-dom` to retrieve the `id` of the recipe from the URL, and then uses that `id` to find the corresponding recipe data from the `data` object.
 * The component also includes a "Reviews" section where users can leave ratings and comments for the recipe.
 */
const RecipeDetails = () => {
    const [isAuthentic, setIsAuthentic] = useState(null)
    const [Details, setDeatils] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        const selectedRecipe = data.find(recipe => recipe.id === parseInt(id))
        setDeatils(selectedRecipe)
       
    },[id])
    
  
    return (
        <>
          <h1 className='headings'>Recipes Detail page</h1>
            <main className="details-container" >
                <article >
                    {Details &&   
                        <section className="details">
                            
                                <img src={Details.imageUrl} alt=""  />
                                <h2>{Details.name}</h2>
                                {isAuthentic  && (
                                    <div className="authentic-badge">
                                        <p> ✓ Verified Authentic Recipe</p>
                                    </div>
                                )}
                                <h3>Description</h3>
                                <p>{Details.description}</p>
                                <h3>Ingredient Use</h3>
                                {Details.Ingredients ?  Details.Ingredients.map(ingredient => (
                                    <ul key={nanoid()} >
                                        <li>{ingredient}</li>
                                    </ul>
                                )) : <h4>no ingredients</h4>}
                                <h3>Preparation Methods</h3>
                                {Details.preparationMethods ? Details.preparationMethods.map(recipeMethods => (
                                    <ul key={nanoid()}>
                                        <li>{recipeMethods.step}</li>
                                        <li>{recipeMethods.method}</li>
                                    </ul>
                                )) : <h4>No preparation Method</h4>}
                        </section>
                    }
                   <Voting setIsAuthentic={setIsAuthentic}/>
                   <Comment  Details={Details}/>
                </article>
            </main>
        </>
    )}

export default RecipeDetails;
