import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

const App = ()=>{
  
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="vishal2402.github.io/ReactAppBusiness/" component={Home} />
      <Route exact path="vishal2402.github.io/ReactAppBusiness/about" component={About} />
      <Route exact path="vishal2402.github.io/ReactAppBusiness/service" component={Service} /> 
      <Route exact path="vishal2402.github.io/ReactAppBusiness/contact" component={Contact} />
      <Redirect to="/" />
      </Switch>
      <Footer />
    </>
    
  );
};

export default App;
