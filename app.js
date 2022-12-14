const express = require('express')

//Routes
const { userRoute } = require('./routes/user.routes');
const {taskRoute} = require('./routes/task.routes')

const app = express();

//Enable incoming JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/users', userRoute)
app.use('/api/v1/tasks', taskRoute)


module.exports = {app}