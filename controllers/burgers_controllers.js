var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic

// GET route for re-routing to correct path for GET
router.get("/burgers", function (req, res) {
    res.redirect("/");
});

// GET request route for SELECT (home page route rendering index.handlebars)
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});
// POST request route for INSERT (for creating new burger)
router.post('/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
});
// PUT request route for UPDATE (for devouring burger)
router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

 // DELETE request route (for deleting burger)
router.delete('/burgers/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    burger.deleteOne(condition, function () {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;