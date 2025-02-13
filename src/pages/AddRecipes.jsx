
const AddRecipes = () => {
    return (
        <>
        
           <h1 className="add">Add Recipes</h1> 
            <section className="addRecipes-Section">
                <form action="/submit-recipe" method="post">
                    <fieldset>
                        <legend>Recipe Information</legend>
                        <label htmlFor="recipe-name">Recipe Name</label>
                        <br/>
                        <input type="text" name="recipe-name" placeholder="cassava-leaf" id="recipe-name"/>
                        <br />
                        <label htmlFor="image-upload">Image</label>
                        <br/>
                        <input type="file" name="image-upload" id="image-upload"/>
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea name="description" id="description" required></textarea>
                        <br />
                        <label htmlFor="prep-time">Preparation Time</label>
                        <br />
                        <input type="text" name="prep-time" id="prep-time"/>
                    </fieldset>
                    <fieldset>
                        <legend>Ingredients</legend>
                        <label htmlFor="ingredients">Ingredient List:</label>
                        <br />
                        <textarea id="ingredients" name="ingredients" required></textarea>
                        <br />
                        <label htmlFor="measurements">Measurements:</label>
                        <br />
                        <textarea id="measurements" name="measurements" required></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Additional Information</legend>
                        <br />
                        <label htmlFor="cuisine-type">Cuisine Type:</label>
                        <br />
                        <input type="text" id="cuisine-type" name="cuisine-type" required />
                        <br />
                        <label htmlFor="dietary-restrictions">Dietary Restrictions:</label>
                        <br />
                        <input type="text" id="dietary-restrictions" name="dietary-restrictions" />
                        <br />
                        <label htmlFor="difficulty-level">Difficulty Level:</label>
                        <br />
                        <select id="difficulty-level" name="difficulty-level" >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <br/>
                        <label htmlFor="tags">Tags:</label>
                        <br />
                        <input type="text" id="tags" name="tags" required /> 
                    </fieldset>
                    <fieldset>
                        <legend>User Information</legend>
                        <br />
                        <label htmlFor="author-name">Name:</label>
                        <br />
                        <input type="text" id="author-name" name="author-name" required/>
                        <br />
                        <label htmlFor="contact-information">Contact Information:</label>
                        <br />
                        <input type="email" id="contact-information" name="contact-information" required />
                    </fieldset>
                </form>
                    <button type="submit" className="Submit-btn">Submit Recipe</button>
           </section>
        </>
    );
}

export default AddRecipes;
