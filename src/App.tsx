import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Store from './pages/Store';
import NewShoe from './pages/NewShoe';
import Workers from './pages/Workers';


const router = createBrowserRouter([
  {path:'/' , element: <Dashboard/>, children:[
    {index:true, element:<Home/>},
    {path: '/magazino', element:<Store/>},
    {path: '/lavorazione', element:<NewShoe/>},
    {path: '/operatori', element:<Workers/>},
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
