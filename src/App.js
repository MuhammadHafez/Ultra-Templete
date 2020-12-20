import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './Components/Index/Index';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Index} />
          <Route exact path='/contact' component={Contact} />
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;