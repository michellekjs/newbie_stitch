import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./components/main-page";
import CreateTodo from "./components/create";
import EditTodo from "./components/edit";
import TodosList from "./components/todo";
import DeleteTodo from "./components/delete";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav class="navbar navbar-expand-sm   navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Plans</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/todos">List of things to do</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create">Make new plan</a>
              </li>
            </ul>
          </nav>
          
          <br/>
          <Route path = "/" component = {Mainpage}/>
          <Route path="/todos"  exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
          
          {/* <Route path="/sigin" component={Signin}/>
          <Route path="/register" component={Resgister}/> */}


        </div>
      </Router>
    );
  }
}

export default App;