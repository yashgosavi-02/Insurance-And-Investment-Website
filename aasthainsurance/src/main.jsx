import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
import Products from './components/Products/Products.jsx' 
import Login from './components/Home/Login.jsx'
import Register from './components/Home/RegistrationForm.jsx' 
import DocumentSubmission from './components/Home/DocumentSubmission.jsx'
import ProductsRemaining from './components/Products/ProductsRemaining.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route path='services' element={<Products/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/documentsubmission' element={<DocumentSubmission/>}/>
      <Route path='/more-products' element={<ProductsRemaining/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
