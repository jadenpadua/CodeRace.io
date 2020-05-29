const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config()
app.use(require("cors")()) 
app.use(require('body-parser').json())


const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/suggestions', (req, res) => {
  console.log('Received suggestion: ' + req.body.input);
  // TODO: Add req.body.input to Suggestion document, in whatever
  // way you'll actually do it.
  //
  // Wahoo! - Arch Party God
});


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