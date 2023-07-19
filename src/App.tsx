import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';


const router = createBrowserRouter([
  {path:'/' , element: <Dashboard/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
