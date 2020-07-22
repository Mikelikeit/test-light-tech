import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Tasks from "./components/Tasks/Tasks";
import Staff from "./components/Staff/Staff";
import Cog from "./components/Cog/Cog";
import Support from "./components/Support/Support";
import {Route} from "react-router-dom";
import GiraffesContainer from "./components/Giraffes/GiraffesContainer";


const App = (props) => {
    return (
        <div className="App">
            <div className={"navbar"}>
                <NavBar/>
            </div>
            <div className={"content"}>
                <Route path="/home" component={Home}/>
                <Route path="/tasks" component={Tasks}/>
                <Route path="/giraffes" component={GiraffesContainer}/>
                <Route path="/staff" component={Staff}/>
                <Route path="/cog" component={Cog}/>
                <Route path="/support" component={Support}/>
            </div>
        </div>
    );
}

export default App;
