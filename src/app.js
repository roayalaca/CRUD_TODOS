const express = require('express');
const db = require('./utils/database')
const ToDos = require('./models/todos.models')

db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch( (err) => console.log(err));

db.sync()
.then ( () => console.log("Base de datos sincronizada"))
.catch( (err) => console.log(error))

const app = express();

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

app.listen(8300, () => {
    console.log('Servidor escuchando en el puerto 8300')
});

console.log(process.env)