const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const port = "3000";

const url = "mongodb://localhost:27017/admin";

mongoose.connect(url, {})
.then(result => console.log('Database Connected'))
.catch(result => console.log(err));

const StudentRoute = require('./Router/Employee.route');
app.use('/student', StudentRoute);

//Mali endpoint
app.use((req, res, next) => {
    const err = new Error('Endpoint not found');
    err.status = 404;
    next(err);
});

//Express Error Handle / Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(port, () => {
    console.log('Listening on port 3000...')
});