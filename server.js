var express = require ('express');
var path = require ('path');
var app = express();

app.set('views', path.join(__dirname, '../client/src', 'index'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get ('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify("HELLO FROM SERVER"));
    console.log("SERVER HELLO");
});

var lat = 33.5500, lng = 73.5231;

app.get ('/g', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
  
   if  ((req.param('lat') && req.param('lng')) != undefined) {
        lat = req.param('lat');
        lng = req.param('lng');
    }

    console.log("Coordinates Recieved!");
    console.log("LAT: ", lat, "LNG: ", lng);
    res.send(JSON.stringify(lat + " " + lng));
});

app.get ('/p', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

  //  console.log("Coordinates Requested!   ", "LAT: ", lat, "LNG: ", lng);
    res.send(JSON.stringify(lat + " " + lng));
});

app.get ('/recieveCoordinates', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send("recieveCoordinates get called!");
    console.log("recieveCoordinates get called!");
})

app.post ('/recieveCoordinates', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send("recieveCoordinates post called!");
    console.log("recieveCoordinates post called!");
})

app.put ('/recieveCoordinates', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send("recieveCoordinates put called!");
    console.log("recieveCoordinates put called!");
})

app.listen (process.env.PORT || 3001, function () {
    console.log("Server Started at port ", 3001);
});
