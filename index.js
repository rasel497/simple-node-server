const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


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

// username: dbUser1
// password: mkn1ktJpKFQgUUDY

// MongoDB >Database>Connect>Connect To application>Mark>copy>finally past here
const uri = "mongodb+srv://dbUser1:mkn1ktJpKFQgUUDY@cluster0.mpr3cem.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// from node mongodb CRUD
async function run() {
    try {
        const userCollection = client.db('simpleNode').collection('users');
        const user = { name: 'Cahiya mahi', email: 'cahi@gmail.com' }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}
run().catch(err => console.log(err));



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