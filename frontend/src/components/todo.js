import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_details}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <button class="btn btn-outline-info">
                <Link to={"/edit/"+props.todo._id}>Revise</Link>
            </button>
        </td>
        <td>
            <button class="btn btn-outline-warning">
                <Link to={"/delete/"+props.todo._id}> Delete </Link>
            </button>
        </td>
        <td align="center">
            <input type="checkbox" name ="check" value="done"></input>
        </td>
        <td>{props.todo.todo_date}</td>
        {/* <td>{props.todo.todo_completed}</td> */}
    </tr>
)
export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map((currentTodo)=>{
            return <Todo todo={currentTodo}  
            key={currentTodo._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3 className="exp"></h3>
                <table className="table" style={{ marginTop: 20 }} >
                    <thead class="thead-dark">
                        <tr>
                            <th>Description</th>
                            <th>Details</th>
                            <th>Priority</th>
                            <th>Action</th>
                            <th>Delete</th>
                            <th>Checkbox</th>
                            <th>Date</th>
                            {/* <th>Complete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}