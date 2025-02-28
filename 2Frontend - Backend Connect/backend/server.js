// import module is - module js - asynchronous
// require - common js = synchronous
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

// get a list of 5 jockes

app.get("/api/jokes", (req, res) => {
   const jockes = [
    {
        id : 1,
        title : "Joke 1",
        content : "This is joke 1"
    },
    {
        id : 2,
        title : "Joke 2",
        content : "This is joke 2"

    },
    {
        id : 3,
        title : "Joke 3",
        content : "This is joke 3"

    },
    {
        id : 4,
        title : "Joke 4",
        content : "This is joke 4"
    },
    {
        id : 5,
        title : "Joke 5",
        content : "This is joke 5"
    }
    ];
    res.send(jockes);
    }
);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);
