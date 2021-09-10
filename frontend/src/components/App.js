import React, { Component } from "react"
import {render} from "react-dom"
import HomePage from "./Homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="center">
            <HomePage/>
        </div>
        );
    }
}


const appDiv = document.getElementById("app");
render(<App/>, appDiv);