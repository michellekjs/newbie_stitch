import React, { Component } from 'react';
import axios from 'axios';
export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoDetails=this.onChangeTodoDetails.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description: '',
            todo_details:'',
            todo_priority: '',
            todo_completed: false
        }
    }
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoDetails(e){
        this.setState({
            todo_details: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e){
        this.setState({
            todo_completed: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_details: this.state.todo_details,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        this.setState({
                    todo_description: '',
                    todo_details:'',
                    todo_priority: '',
                    todo_completed: ''
                })
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

    }
    render() {
        return (
            <div style={{marginTop: 30}}>
                <h3>Create Your Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Write your details: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_details}
                                onChange={this.onChangeTodoDetails}
                        />
                    </div>
                    <div className="form-check form-check-inline">
                        <p>Priority:</p>
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.todo_priority==='Low'} 
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={this.state.todo_priority==='Medium'} 
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={this.state.todo_priority==='High'} 
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                    {/* <div className="form-group">
                        <p>Completed?:</p>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="isCompleted" 
                                    id="yes" 
                                    value="Yes"
                                    checked={this.state.todo_priority==='Yes'} 
                                    onChange={this.onChangeTodoCompleted}
                                    />
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="isCompleted" 
                                    id="no" 
                                    value="No" 
                                    checked={this.state.todo_completed==='No'} 
                                    onChange={this.onChangeTodoCompleted}
                                    />
                            <label className="form-check-label">No</label>
                        </div>
                        
                    </div> */}
                    <div className="form-row float-right">
                        <button class="btn btn-outline-info" type="submit" >Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}