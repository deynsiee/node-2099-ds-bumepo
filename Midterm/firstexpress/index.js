const { response } = require('express');
const express = require('express');
const app = express();

//Serving static files
app.use(express.static('public'));

//serving static file index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//create 4 more routes - about, blog, upload, contact
app.get('/about', (req, res) => {
  res.send('This is the about page...');
});
app.get('/blog', (req, res) => {
  res.send('This is the blog page...');
});
app.get('/upload', (req, res) => {
  res.send('This is the upload page...');
});
app.get('/contact', (req, res) => {
  res.send('This is the contact page...');
});

const path = require('path');

var errorPg = path.join(__dirname, './404.html');

//catch all endpoint will be error page
app.get;

app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

//Server Listener
//app.listen(3000, function() {
//    console.log('Server listening at port 3000...')
//});

//server listener option 2
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
