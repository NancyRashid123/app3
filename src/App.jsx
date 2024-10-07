import React from 'react'
import Layout from './componants/layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/homePage/Home'
import Posts from './pages/posts/Posts'
import NotFound from './pages/notFound/NotFound'
import SinglePost from './pages/posts/SinglePost'

export default function App() {
  const routes = createBrowserRouter([
    {path:'/' , element: <Layout/> , children:[
      {path:'' , element: <Home/>},
      {path:'posts' , element: <Posts/>},
      {path:'posts/:id' , element: <SinglePost/>},
      {path:'*' , element:<NotFound/>}
    ]}
  ])

  return (
    <div>
     <RouterProvider router = {routes}/>
    </div>
  )
}
