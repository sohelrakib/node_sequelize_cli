const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// ** routes **
const userRoute = require('./routes/userRoute');
// ** end of routes **


app.get('/', (req, res, next) => {
    res.send('<html><h1>Hello World 24</h1></html>');
})
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} .. .. ..`);
});