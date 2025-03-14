require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/payments.routes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});