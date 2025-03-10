import Recipes from '../Component/Recipes'

function HomePage({ setRecipesItem, }) {
  
  return (
    <main>
     <Recipes  setRecipesItem={  setRecipesItem}  />
    </main>
  )
}

export default HomePage
