import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//BrowserRouter, tudo que for de router tem que ficar dentro dele
//Routes quer dizer que aqui eu quero ter rotas. Pode ter várias rotas dentro

//Quando bater na raiz '/', vai renderizar o componente Home

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/abaut' element={<About/>} /> 
        <Route path='/posts/:id' element={<Post/>} />
        <Route path='/posts' element={<Post/>} />
        <Route path='/redirect' element={<Redirect/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
