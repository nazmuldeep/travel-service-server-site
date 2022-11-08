// password : xKQcwJ830f02MlOX

const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.Port || 5000;


// middleware using
app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ivnriwf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

async function run() {
    try {
        const UserDataCollection = client.db('travel').collection('userData');
        app.get('/users', async (req, res) => {
            const query = {};
            const cursor = UserDataCollection.find(query)
            const users = await cursor.toArray();
            res.send(users)

        })


    } finally {

    }
}

run().catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('Travel live server running')
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})