import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import "../src/css/main.css";
import StartPage from "./Components/Pages/Start";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DetailsPage from "./Components/Pages/Details";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <NavBar/>
        <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route path="/details" component={DetailsPage} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
