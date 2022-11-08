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


run().catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('Travel live server running')
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})