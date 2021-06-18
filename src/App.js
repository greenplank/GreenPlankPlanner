import "./App.css";
import NavBar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import  Contact from "./Pages/Contact";
import TerraceMain from "./Pages/Environment/house"
import Index from "./Pages/Environment/index"
import SmartClassic from "./Pages/Board/smartClassic"
import Board from "./Pages/Board/board.js"
import IndexForm from "./Pages/Forms/indexform"
import React from "react";

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index" component={()=><Index/>} />
            <Route exact path="/house" component={()=><TerraceMain/>} />
            <Route exact path="/board" component={()=><Board/>} />
            <Route exact path="/smartclassic" component={() => <SmartClassic/>} />
            <Route exact path="/indexform" component={() => <IndexForm/>} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;


