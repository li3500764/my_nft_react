import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Index from "./page/Index" 
import Login from "./admin/Login" 
import AdminIndex from "./admin/view/index"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Index /> }/>
      <Route path="/index"  element={<Index /> }/>
      <Route path="/login"  element={<Login /> }/>
      <Route path="/admin/index" element={<AdminIndex /> }></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
