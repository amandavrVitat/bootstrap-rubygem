// load the things we need
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/partials"));

// use res.render to load up an ejs view file

// index
app.get('/', function(req, res) {
    res.render('pages/index');
});

// colors
app.get('/colors', function(req, res) {
    res.render('pages/colors');
});

// buttons
app.get('/buttons', function(req, res) {
    res.render('pages/buttons');
});

// typography
app.get('/typography', function(req, res) {
    res.render('pages/typography', {
        title: 'typography'
    });
});

// buttons
app.get('/pills', function(req, res) {
    res.render('pages/pills');
});

// cards
app.get('/cards', function(req, res) {
    res.render('pages/cards');
});

// tabs
app.get('/tabs', function(req, res) {
    res.render('pages/tabs');
});

// steps
app.get('/steps', function(req, res) {
    res.render('pages/steps');
});

// forms
app.get('/forms-text', function(req, res) {
    res.render('pages/forms-text');
});
app.get('/forms-select', function(req, res) {
    res.render('pages/forms-select');
});
app.get('/forms-checkbox', function(req, res) {
    res.render('pages/forms-checkbox');
});
app.get('/forms-radio', function(req, res) {
    res.render('pages/forms-radio');
});

// timeline
app.get('/timeline', function(req, res) {
    res.render('pages/timeline');
});

// modal
app.get('/modal', function(req, res) {
    res.render('pages/modal');
});

// table
app.get('/table', function(req, res) {
    res.render('pages/table');
});

// VitScore
app.get('/VitScore', function(req, res) {
    res.render('pages/VitScore');
});

// Switch
app.get('/switch', function(req, res) {
    res.render('pages/switch');
});

// Alerts
app.get('/alerts', function(req, res) {
    res.render('pages/alerts');
});

// Counters
app.get('/counters', function(req, res) {
    res.render('pages/counters');
});

//app.listen(8080);
//console.log('8080 is the port');

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
