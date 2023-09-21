
import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
          <Navbar />
       
          <Routes>
          <Route exact path="/NewsApp" element={<News key="general" pageSize={6} country="in" category="general" />}/>
          <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general" />}/>
              
          <Route exact path="/" element={<News key="home" pageSize={6} country="in" category="general" />}/>
            
            <Route exact path="/busines" element={<News key="business" pageSize={6} country="in" category="business" />}/>
         
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />}/>
         
            <Route exact path="/science" element={ <News key="science" pageSize={6} country="in" category="science" />}/>
           
            <Route exact path="/technology" element={ <News key="technology" pageSize={6} country="in" category="technology " />}/>
             

            <Route exact path="/sports" element={ <News key="sports" pageSize={6} country="in" category="sports" />}/>
         
          </Routes>
        </Router>
      </div>
    );
  }
}
