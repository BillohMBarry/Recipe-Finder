import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import Approvals from './pages/Approvals'
import AddRecipes from './pages/AddRecipes'
import NavLinks from './pages/NavLinks'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
        <NavLinks />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes-page' element={<Recipes />}/>
          <Route path='/details/:id' element={<RecipeDetails />} />
          <Route path='/approvals-page' element={<Approvals />}/>
          <Route path='/addRecipes-page' element={<AddRecipes />}/>
        </Routes>
    </>
  )
}

export default App
