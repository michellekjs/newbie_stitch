const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
const todoRoutes = express.Router();

const PORT = 4000;
let Todo = require('./model');
const e = require('express');
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true ,useUnifiedTopolgy:true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB connection success");
})


todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(error, task) {
        if (error) {
            console.log(error);
        } else {
            res.json(task);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(error, task) {
        if (error){
            console.log(error);
        }
        else{
            res.json(task);
        }
    });
});
todoRoutes.delete('/:id', function(req,res,next){
    Todo.findByIdAndRemove(req.params.id, req.body, function(err,post){
        if (err) return next(err);
        res.json(post);
    })
})


todoRoutes.route('/:id').delete((req,res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error: '+err));
    });


todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, task) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            task.todo_description = req.body.todo_description;
            task.todo_details= req.body.todo_details;
            task.todo_priority = req.body.todo_priority;
            task.todo_completed = req.body.todo_completed;
            task.todo_date =req.body.todo_date;
            task.save().then(todo => {
                res.json('updated');
            })
            .catch(err => {
                res.status(400).send("fail");
            });
    });
});


todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(400).json({'todo': 'success'});
        })
        .catch(err => {
            res.status(400).send('fail');
        });
});



app.use('/todos', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});