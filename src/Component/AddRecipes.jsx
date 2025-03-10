  import { useState } from 'react';
  import { IoClose } from "react-icons/io5";
  import { nanoid } from 'nanoid';
  const AddRecipes = () => {
        const [ingredients, setIngredients] = useState(['']); 
        const [preparationMethods, setPreparationMethods] = useState(['']); 
        // add a new input whenever the user clicks the "Add Ingredient" button
        const handleAddIngredient = () => setIngredients([...ingredients, '']);
            // add a new input whenever the user clicks the "Add Ingredient" button
        const handleAddPreparationMethod = () => setPreparationMethods([...preparationMethods, '']); 
        // remove an input whenever the user clicks the "Remove Ingredient" button
        const handleRemoveIngredient = indexToRemove => setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
        // remove an input whenever the user clicks the "Remove Ingredient" button
        const handleRemovePreparationMethod = indexToRemove => setPreparationMethods(preparationMethods.filter((_, index) => index !== indexToRemove));
            
         
      return (
            <>
                <h1 className="headings">Add Recipes</h1> 
                <section className="addRecipes-Section">         
                    <form>
                        <section className='recipes-sect'>
                            <p>Uploading recipes is easy! Add yours to your favorites, share with friends, family, or the community</p>
                            <hr />
                            <div className="recipe-input">
                                <span>Recipe Name</span>
                                
                                <input type="text" placeholder='e.g cassava-leaf' />
                                <span>Description</span>
                                <textarea name="" id="" placeholder='share the story behind your recipe.'/>
                                <span>Photo (optional)</span>
                                <input type="file" src="" alt="" />
                            </div>
                         
                            
                        </section>
                        <section className='ingredient-sect'>
                            <span style={{fontWeight: "bold"}}>Ingredients</span>
                            <p>Enter one ingredient per line. Include the quantity(i.e cups,tablespoons) and any special preparation.</p>
                            {/* Map through ingredients array to create input fields */}
                            
                            <br />
                            {ingredients.map((newInput, index) => (
                                <div className='ingredient-input' key={nanoid()}>
                                <input
                                type="text"
                                value={newInput}
                                placeholder={index === 0 ? "e.g. 2 tablespoons salt" : "Add another ingredient"}
                                />
                                <br />
                                {/* remove button */}
                                    { index > 0 &&  <IoClose onClick={() => handleRemoveIngredient(index)} fontSize={30}/>}
                                </div>
                            ))}
                            <button type="button" onClick={handleAddIngredient} className='btns'>Add Ingredient</button>
                        </section>                     
                    
                        <hr />
                        <section className='ingredient-sect'>
                            
                                <span style={{fontWeight: "bold"}}>Preparation Methods</span>
                                <p>Explain how to make your recipe</p>
                                  {/* Map through preparationMethods array to create input fields */}
                                {preparationMethods.map((method, index) => (
                                    <div className='preparation-input' key={nanoid()}>
                                        <textarea type="text"
                                            placeholder={index === 0 ? "e.g Preheat oven to 350 degress" : "Add another step"}
                                            name={`preparation-method-${method}`}
                                            id={`preparation-method-${index}`}
                                        />
                                        <br />
                                        {/* Remove button */}
                                        {index > 0 && <IoClose onClick={() => handleRemovePreparationMethod(index)} fontSize={30} />}
                                    </ div>
                                ))}
                                <button type='button' onClick={handleAddPreparationMethod} className='btns'>ADD step</button>
                            
                        </section>

                        <div className="submit-btns">
                            < button type="submit" className="">Submit Recipe</button>
                            <button type='cancel'>Cancel</button>

                        </div> 
                    </form>
                </section>
        </>
      )          
      
  }

  export default AddRecipes;


