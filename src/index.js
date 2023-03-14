const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');

// const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {

        console.log(`Server started at ${PORT}`);

    })
}

setupAndStartServer();