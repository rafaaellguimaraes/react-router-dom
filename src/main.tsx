import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Post } from './components/Post'
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
        {/*<Route path='/posts/:id' element={<Posts/>} />*/}
        {/*Abaixo tem um exemplo de rotas aninhadas, quando você tem mais de 1 conteudo pra ser exibido*/}
        <Route path='/posts' element={<Posts/>}>
          <Route path=':id' element={<Post/>}/>
        </Route>
        <Route path='/redirect' element={<Redirect/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
