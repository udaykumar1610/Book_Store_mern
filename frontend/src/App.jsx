//import React from 'react'
  
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBook from "./pages/CreateBook"
import ShowBook from "./pages/ShowBook"
import Edit from "./pages/Edit"
import DeleteBook from "./pages/DeleteBook"

const App = () => {
  return (
    // <div className='bg-red-400 text-white'>
    //    App
    // </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<Edit/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
