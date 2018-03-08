const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(){
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  require('../app/routes/index.server.route')(app);
  require('../app/routes/medicalCondition.routes')(app);
  require('../app/routes/dos.routes')(app);
  require('../app/routes/donts.routes')(app);

  return app;
};
