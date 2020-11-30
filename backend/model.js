const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {type: String},
    todo_details:{type:String},
    todo_priority: { type: String},
    todo_completed: {type: Boolean},
    todo_date:{type:Date, default:Date.now() }
});

module.exports = mongoose.model('Todo', Todo);

