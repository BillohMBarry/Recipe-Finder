import './App.css'
import Recipes from './Component/Recipes'
import RecipeDetails from './Component/RecipeDetails'
import AddRecipes from './Component/AddRecipes'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './LayOut/MainLayout'
import HomePage from './Pages/HomePage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/recipes-page' element={<Recipes />} />
      <Route path='/details/:id' element={<RecipeDetails />} />
      <Route path='/addRecipes-page' element={<AddRecipes />} />
    </Route>
  )
)
function App() {

  return <RouterProvider router={router}  />
}

export default App
