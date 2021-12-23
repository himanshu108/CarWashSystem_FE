import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Services from './Services'
import WhyUs from './WhyUs'
import Working from './Working'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import Member_Login from '../../Member/Member_Login'
import Footer from './Footer'

function Home() {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Services/>} />
        <Route exact path="/" element={<Services/>} />
        <Route exact path="/whyus" element={<WhyUs/>} />
        <Route exact path="/working" element={<Working/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/member_login" element={<Member_Login/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
       
        </>
    )
}

export default Home
