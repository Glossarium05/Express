let express = require('express');
let app = express();

function factorial(n) {
    let result = n;
    for (let i = --n; i > 1; i--) {
        result *= i;
    }
    return result;
}
app.disable('x-powered-by');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
        let data = {};
        data.query = req.query; // save get params
        data.answ = factorial(data.query.digit); // calc factorial and save to answ
        res.render('index', data);
    });

let server = app.listen(5000, function () {
    console.log("All is connected Port: 5000");
});