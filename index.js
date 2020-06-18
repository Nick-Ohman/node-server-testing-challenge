
const server = require('./api/server.js');

const port = process.env.PORT || 5005;
const environment = process.env.NODE_ENV;


server.listen(port, () => {
    console.log(`\n === Server http://localhost:${port} === \n`)
})

