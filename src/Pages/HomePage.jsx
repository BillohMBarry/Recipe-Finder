import Recipes from '../Component/Recipes'
function HomePage({  setRecipesItem}) {
   
  return (
    <div>
        {/* <section className='Home'>
             <img src={flag} alt='' width={700} />
             <h1>welcome</h1>  
        </section> */}
        <Recipes isHome={true}   setRecipesItem={  setRecipesItem}/>
        {/* <h1>hello</h1> */}
    </div>
  )
}

export default HomePage
