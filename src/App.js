import "./App.css";
import NavBar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import  Contact from "./Pages/Contact";
import TerraceMain from "./Pages/Environment/house"
import Index from "./Pages/Environment/index"
import Garden from "./Pages/Environment/garden"
import Roof from "./Pages/Environment/roof"
import Balcony from "./Pages/Environment/balcony"
import Decking from "./components/TerraceSystem/Border&Colors/decking"
import SmartClassic from "./Pages/Board/SmartDecking/smartClassic"
import Marine60 from "./Pages/Board/MarineDecking/marine60"
import Form from "./components/TerraceSystem/Forms/form"
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
            <Route exact path="/garden" component={()=><Garden/>} />
            <Route exact path="/roof" component={()=><Roof/>} />
            <Route exact path="/balcony" component={()=><Balcony/>} />
            <Route exact path="/decking" component={() => <Decking/>} />
            <Route exact path="/smartclassic" component={() => <SmartClassic/>} />
            <Route exact path="/marine60" component={() => <Marine60/>} />
            <Route exact path="/form" component={() => <Form/>} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;


