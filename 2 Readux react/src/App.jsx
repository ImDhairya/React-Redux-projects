import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Product from './components/Product'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RootLayout from './components/RootLayout'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(createRoutesFromElements (
    <Route path='/' element = {<RootLayout/>}>
      <Route index element= {<Dashboard/> } ></Route>
      <Route path='/cart' element= {<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className=' App'>
      <RouterProvider router={router} >

      </RouterProvider>
    </div>
  )
}

export default App
