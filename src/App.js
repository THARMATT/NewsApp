
import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
          <Navbar />
{/* <News/> <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general" />}>
              
              </Route> */}
          <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general" />}/>
              
              {/* </Route> */}
          <Route exact path="/home" element={<News key="home" pageSize={6} country="in" category="general" />}/>
              
              {/* </Route> */}
            <Route exact path="/busines" element={<News key="business" pageSize={6} country="in" category="business" />}/>
              
            {/* </Route> */}
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />}/>
              
          {/* </Route> */}
            

            <Route exact path="/science" element={ <News key="science" pageSize={6} country="in" category="science" />}/>
             
            {/* // </Route> */}
            <Route exact path="/technology" element={ <News key="technology" pageSize={6} country="in" category="technology " />}/>
             
            {/* // </Route> */}

            <Route exact path="/sports" element={     <News key="sports" pageSize={6} country="in" category="sports" />}/>
         
            {/* // </Route> */}
          </Routes>
        </Router>
      </div>
    );
  }
}
