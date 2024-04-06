import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Layout from './components/ui/Layout'
import { routes } from './pages/routes/Route'

export const App=()=> {
    const token=localStorage.getItem('token');
    if(!token){
       return <Login/>;
    }

    return (
        <BrowserRouter>
        <Routes> 
         <Route path='/' element={<Layout/>}> 
         {
          routes.map((routeObj, index) => {
            return <Route key={index} path={routeObj.path} element={routeObj.element} />   
        }) 
        }  
        </Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route> 
        </Routes> 
        </BrowserRouter>
    )
}
