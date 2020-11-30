import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteTodo extends Component {

  constructor(props) {
       super(props);
       this.state = {
           todo_description: '',
           todo_responsible: '',
           todo_priority: '',
           todo_completed: false
       }
   }

   componentDidMount() {
     axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id)
                 .then(res => console.log(res.data));
     this.props.history.push('/todos/');
  }

  render() {
      return (null)
    }
 }
