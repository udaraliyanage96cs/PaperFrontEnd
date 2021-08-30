import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Faculty from './Components/Faculty';
import Level from './Components/Level';
import Semester from './Components/Semester';
import Years from './Components/Years';
import Paper from './Components/Paper';
import Review from './Components/Review';
import Footer from './Components/Footer';
import AOS from 'aos';
import Hero from './Components/Hero';




class App extends Component {

  componentDidMount() {
    AOS.init();
  }

  render() {

    return (
      <div className="App">

        <div className="">
          <Router>
            <Switch>

              <Route path="/home" exact>
                <Header />
                <div className="container">
                  <Home />
                </div>
                <Review />
              </Route>

             

              <Route path="/about" exact>
                <Hero message="About Us" />
                <div className="container">
                  <About  />
                </div>
              </Route>

              <Route path="/faculty/:id/:uni" exact>
                <Hero message="All Faculties Of Your University"/>
                <div className="container">
                  <Faculty />
                </div>
              </Route>

              <Route path="/level/:facid/:uniid" exact>
                <Hero message="All Levels Of Your Faculty"/>
                <div className="container">
                  <Level />
                </div>
              </Route>

              <Route path="/semester/:levelid/:facid/:uniid" exact>
                <Hero message="All Semester Of Your Level"/>
                <div className="container">
                  <Semester />
                </div>
              </Route>

              <Route path="/years/:semid/:levelid/:facid/:uniid" exact>
                <Hero message="All Years" />
                <div className="container">
                  <Years />
                </div>
              </Route>

              <Route path="/papers/:yearid/:semid/:levelid/:facid/:uniid" exact>
                <Hero message="All Papers That You Wants"/>
                <div className="container">
                  <Paper />
                </div>
              </Route>

              <Route path="/" exact>
                <Header />
                <div className="container">
                  <Home />
                </div>
              </Route>





            </Switch>

          </Router>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
