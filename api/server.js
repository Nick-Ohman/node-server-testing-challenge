const express = require('express');
const server = express();

const HumanRouter = require('../data/human-router')


server.use(express.json());
server.use('/api/humans', HumanRouter)


server.get('/', (req, res) => {
    res.status(200).json({
        api: "up"
    })
})

module.exports=server;