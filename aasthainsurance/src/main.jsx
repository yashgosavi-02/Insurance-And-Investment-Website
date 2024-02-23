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
import LoginAdmin from './components/Home/LoginAdmin.jsx'
import LoginUser from './components/Home/LoginUser.jsx'
import Register from './components/Home/RegistrationForm.jsx' 
import DocumentSubmission from './components/Home/DocumentSubmission.jsx'
import ProductsRemaining from './components/Products/ProductsRemaining.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'
import ChooseLogin from './components/Home/ChooseLogin.jsx'
import SIPCalculator from './components/Features/Calculators/SIPCalculator.jsx'
import RetirementCalculator from './components/Features/Calculators/RetirementCalculator.jsx'
import MutualFunds from './components/Home/MutualFunds.jsx'
import PlansSection from './components/Home/PlansSection.jsx'
import CalculatorsAll from './components/Home/CalculatorsAll.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route path='/insurance' element={<Products/>} />
      <Route path="/login" element={<ChooseLogin />} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/documentsubmission' element={<DocumentSubmission/>}/>
      <Route path='/more-products' element={<ProductsRemaining/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/login/user'element={<LoginUser/>}/>
      <Route path='/login/admin'element={<LoginAdmin/>}/>
      <Route path='/calculator/sip-calculator' element={<SIPCalculator/>}/>
      <Route path='/calculator/retirement-calculator' element={<RetirementCalculator/>}/>
      <Route path='/products/plans' element={<PlansSection/>}/>
      <Route path='/products/mutualfunds' element={<MutualFunds/>}/>
      <Route path='/products/all-calculators' element={<CalculatorsAll/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
