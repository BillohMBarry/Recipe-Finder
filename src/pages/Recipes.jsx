import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createServer, Model } from "miragejs"
createServer({
  

  models: {
    item: Model,
  },
  routes() {
      this.namespace = "api"
  
      this.get("/items/", (schema, request) => {
        
        return schema.items.all()
      })
      // this.get("/items", (schema, request) => {
      //   let id = request.params.id
      
      //   return schema.items.find(id)
      // })
    },
  seeds(server) {
      server.create("item", { 
          name: "Binch (beans)", 
          estimateTime: 60, 
          description:"Black-eyed beans, known as binch, are a staple in sierra Leone, providing a welcome change of pace from the myriad", 
          imageUrl: "https://eatyourworld.com/wp-content/uploads/2023/07/binch-bean-dishes-high-res-500x375.jpg", 
          alt: "bean-img", 
          category: "sauce"
      })
      server.create("item", { 
          name: "Cassava-leaf",
          estimateTime: 40, 
          description: "Cassava-leaf, are stews made with various green leaves, and they're essential to the country's cuisine. Are sierra leoneans favourite",
          imageUrl: "https://eatyourworld.com/wp-content/uploads/2023/07/leaf-stews-plasas-high-res-500x375.jpg", 
          alt: "cassava-leaf-img",
          category: "sauce" 
      })
      server.create("item", {
          name: "Groundnut-soup", 
          estimateTime: 45,
          description: " Along with the various plasas, groundnut soup or stew is the “chop” you're most likely to encounter at a Sierra Leonean restaurant. Groundnuts, which many of us know as peanuts, are ground into a paste and seasoned with chopped onion, chilies (called “peppers” here)",
          imageUrl: "https://eatyourworld.com/wp-content/uploads/2023/07/Tribewanted-Groundnut-Stew-1024x768.jpg",
          alt: "groundnut-soup-img",
          category: "soup"
      })
      server.create("item", {
          "name": "Cassava bread with gravy",
          "description": " Peddled by roadside vendors, this local specialty of Waterloo pairs small, tortilla-like discs of cassava bread with an oily fish sauce.",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/fried-cassava-bread-with-gravy-high-res-1024x768.jpg",
          "alt": "cassava-bread-img",
          "category": "snacks" 
      })
      server.create("item",{
          "name": "foofoo",
          "estimateTime": 60, 
          "description": "Foofoo, also spelled fufu, is a common food around much of tropical Africa. It's prepared in various ways with different ingredients depending on location, but in Sierra Leone, foofoo is made with fermented cassava.",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/foofoo-high-res-1024x768.jpg",
          "alt": "foofoo-img",
          "category": "soup"
      })
      server.create("item",{
           "name": "Leaf-wrapped snacks: oleleh, agidi",
          "estimateTime": 70,
          "description": " These custard-like snacks—traditionally wrapped and steamed in kola or banana leaves, tamale-like—are two of the more interesting street foods",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/leafwrapped-snacks-oleleh-agidi-high-res-1024x768.jpg",
          "alt": "oleleh-img",
          "category": "snacks"
      })
      server.create("item",{
          "name": "Poyo",
          "description": "Poyo is palm wine, sierra leoneans favorite native adult beverage. Though it is traditionally not distilled or fermented or mixed with anything—it is meant to be drunk straight outta the tree, “from God to man,” as they say here—it is mildly alcoholic, probably about 1% alcohol.",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/John-Obey-poyo-1024x768.jpg",
          "alt": "popyo-img",
          "category": "drink" 
      })
      server.create("item",{
          "name": "Fry-Fry",
          "estimateTime": 45,
          "description": "Fry fry is a catchall term for a variety of (usually fried) foods—plus spaghetti, randomly—that is served on the street with bread.",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/fry-fry-high-res-1024x768.jpg",
          "alt": "fry-fry-img",
          "category": "snacks" 
      })
      server.create("item",{
          "name": "Pumpkin stew",
          "estimateTime": 45,
          "description": "Known as punky in Krio, this delicious medley of squash, onion, chile peppers, and oil—usually seasoned with some help from Maggi stock cubes, unfortunately—offers a nice break, in both color and texture, from the leaf-based plasas. Like other Salone stews and soups, it often incorporates some fish or meat and is served over rice for lunch. Its one of our favorite chops.",
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/Tribe-Wanted-Punky-1024x768.jpg",
          "alt": "pumpkin-stew-img",
          "category": "soup"
      })
      server.create("item",{
          "name": "Accara",
          "estimateTime": 30,
          "description": "A common street food in Senegal and other parts of West Africa, accara are crispy black-eyed-bean fritters", 
          "imageUrl": "https://eatyourworld.com/wp-content/uploads/2023/07/accara-high-res-1024x768.jpg",
          "alt": "Accara-img",
          "category": "snacks"
      })
    }
    

})
const Recipes = () => {
    
    const [recipesItem, setRecipes] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const getItems = async () => {
            try {
                const respond = await fetch("api/items")
                if(!respond.ok) throw Error("Api link broken upon fetching data")
                const getRespond = await respond.json()
                setRecipes(getRespond.items)
                console.log(getRespond)
            } catch (error) {
                setFetchError(error.message)
            } finally {
                setisLoading(!isLoading)
            }
        }   
        setTimeout(() => {
            getItems()
        },2000)

    },[])
 
    return (
        <>
          
            <div className="recipe-container">
                  {fetchError &&  <p style={{color: "green", fontSize: "3rem", fontFamily: "bold"}}>{`Error ${fetchError}`}</p>  }
                  {isLoading &&  <p style={{color: "green", fontSize: "3rem", fontFamily: "bold"}}>Loading Recipes</p>  }
                 {recipesItem.map(recipe => (
                    <div className="recipes" key={recipe.id}>
                        <img src={recipe.imageUrl} alt="" />
                        <div className="others">
                            <Link to={`/details/:id${recipe.id}`}>
                             <h1>{recipe.name}</h1>
                            
                            </Link>
                            {recipe.estimateTime &&   <p>{`cooking Time: ${recipe.estimateTime} min`}</p> }
                        </div>
                    </div>
                 ))}
            </div>
       
        </>
    );
}

export default Recipes;
