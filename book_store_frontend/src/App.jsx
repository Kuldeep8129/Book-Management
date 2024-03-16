import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home from "./pages/Home";
import ShowBook from "./pages/ShowBooks";
import CreateBook from "./pages/CreateBooks"; 
import UpdateBook from "./pages/UpdateBooks";
import DeleteBook  from "./pages/DeleteBooks";
//import './App.css';

const App = () =>{
  return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/update/:id' element={<UpdateBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>
    )
}

export default App