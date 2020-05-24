const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(require("cors")()) 
app.use(require('body-parser').json())

const uri = 'mongodb+srv://jaden:Jaden1234@cluster0-ppf0e.mongodb.net/test?retryWrites=true&w=majority'

mongodb.MongoClient.connect(uri, (err, db) => {
  try {
      console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err)
  }
})

// base route. Responds to POST requests to the root route
app.post("/", (req, res) => {
  res.send("Posting data") // always responds with the string "TODO"
});



const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



if (process.env.NODE_ENV === 'production') {

  app.enable('trust proxy');
  app.use(function(req, res, next) {
      if (req.secure){
          return next();
      }
      res.redirect("https://" + req.headers.host + req.url);
  });
  
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  app.listen(port, () => console.log(`Listening on port ${port}`));