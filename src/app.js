const express = require('express');
const db = require('./utils/database')
const ToDos = require('./models/todos.models')
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8300;

db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch( (err) => console.log(err));

db.sync()
.then ( () => console.log("Base de datos sincronizada"))
.catch( (err) => console.log(error))

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor bien')
});


app.post('/api/v1/todos', async (req, res) => {
    try {
       const newToDo = req.body; 
       await ToDos.create(newToDo); 
       res.status(201).send();
    } catch (error) {
       res.status(400).json(error);  
    }
 });

app.get('/api/v1/todos', async(req, res) => {
    try {
        const todos = await ToDos.findAll();
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.get('/api/v1/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        
        const todo = await ToDos.findByPk(id);
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.delete("/api/v1/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        await ToDos.destroy({
            where: {id}
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

app.put('/api/v1/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const { title, description, completed} = req.body;
        await ToDos.update( { title, description, completed }, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
})



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

console.log(process.env)