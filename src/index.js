const express = require('express');
const morgan = require("morgan");
const path = require('path');
const fs = require('fs');

const app = express();
const homeRoutes = require("./routes/index")
const userRoutes = require("./routes/users")

// server settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(homeRoutes)
app.use(userRoutes)

// routes
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res) => res.status(404).send('<h1>Not Found</h1>'))

app.listen(app.get('port'))
console.log(`Server on port ${app.get('port')}`)