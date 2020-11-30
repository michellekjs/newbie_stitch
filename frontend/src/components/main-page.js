import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class TodosList extends Component {
    render(){
        return(
        <div className = "explanation">
            <h>Fast task managing site</h>
            <p> Manage your tasks by priority </p>
            <p> Try it yourself!</p>
        </div>  
        );
    }
}