//import Login from "./components/Login";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavH from "./components/NavH";
import Home from "./components/Home";
import Present from "./components/Present";
import Card from "./components/Card";
import Footer from "./components/Footer";
import DevoirScours from "./components/DevoirScours";
import Section from "./components/Section";
import Product from "./components/Product";

import Statistiques from "./components/profile_components/Staistiques";
import Teacher_Profiles from "./components/profile_components/Teacher_Profile";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeImage from "./components/HomeImage";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import UploadFileBox from "./components/profile_components/UploadFileBox";
import Teachers from "./components/Teachers";
import { Nav } from "react-bootstrap";
function App() {
  const [docs,setDocs] = useState([
    {title:'exams1' ,body:'lorem ipsum...',author:'mario',id:1},
    {title:'exams2' ,body:'lorem ipsum...',author:'mario',id:2},
    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:3},
    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:4},
    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:5},
    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:6},
    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:7},

    {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:8},

])


const [stats,setStats] = useState([
  {title:'exams1' ,body:'lorem ipsum...',author:'mario',id:1},
  {title:'exams2' ,body:'lorem ipsum...',author:'mario',id:2},


])
  return (
    <div className="App">
      {/*   */}
        <Router>
        <Routes>
        <Route exact path='/' element={<div><NavH/>< HomeImage /> <Services/><About/><Contact/> <Footer/></div>}></Route>

        <Route exact path='/home' element={<div><NavH/>< HomeImage /> <Services/><About/><Contact/><Footer/></div>}></Route>
             <Route exact path='/login' element={<div><NavH/> < Login /> <Footer/></div>}></Route>
            <Route exact path='/register' element={<div><NavH/> < Signup /><Footer/></div>}></Route>
            <Route exact path='/section' element={<div><NavH/> < Section /> <Footer/></div>}></Route>
            <Route exact path='/product' element={<div><NavH/>< Product /> <Footer/></div>}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/profile' element={< Profile />}></Route>  

            <Route exact path='/upload' element={<div ><Profile/><UploadFileBox/></div>}></Route>  
            <Route exact path='/exams' element={<div><Profile/>< Teacher_Profiles docs = {docs} title = "Exams"/></div>}></Route>   
            <Route exact path='/stats' element={<div><Profile/>< Statistiques stats = {stats} title = "Statistiques"/></div>}></Route>  
            <Route exact path='/teachers' element={<div><NavH/><Teachers/><Footer/></div> }></Route>   
 

                   
            <Route exact path='/specialiste' element={< DevoirScours />}></Route>   
            
        </Routes>
        </Router>

       
   
  
    {/* <Footer/> */}
      
    </div>
  );
}

export default App;
