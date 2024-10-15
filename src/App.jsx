import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'
import React from 'react'
import Main from './layouts/Main'
import Home from './pages/Home'
import Experience from './pages/Experience'
import TechStack from './pages/TechStack'
import Certificates from './pages/Certificates'
import Projects from './pages/Projects'
import NotFoundPage from './pages/NotFoundPage'

// createBrowserRouter enable client side routing
// creating an object of that will handles the routing logic
// createRoutesFromElements convert jsx elements into route configuration
// so in this object it defines what element or page to render based on the current URL

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Main /> }> 
      <Route index element={ <Home /> } />
      <Route path='/experience' element={ <Experience /> } />
      <Route path='/techstack' element={ <TechStack /> } />
      <Route path='/projects' element={ <Projects /> } />
      <Route path='/certificates' element={ <Certificates /> } />
      <Route path='*' element={ <NotFoundPage /> }/>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App
