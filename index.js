const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple node web server is running');
})

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        // filter users the query
        const search = req.query.name;
        const filtered = users.filter(usr => usr.name.toLowerCase().contain.indexOf(search) >= 0);
        res.send(filtered);
    }
    else {
        res.send(users);
    }

    res.send(users);
})

// create POST api called
app.post('/users', (req, res) => {
    console.log('Post API called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user);
})


app.listen(port, () => {
    console.log(`Simple node server is running on port ${port}`)
})