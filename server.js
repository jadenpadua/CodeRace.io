const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

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