import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
      </Router>
      </>
    );
  }
}

export default App;
