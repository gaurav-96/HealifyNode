module.exports= function(app){
  var donts = require('../controllers/donts.controller.js');
  app.get('/donts/:mcId',donts.getDontsForMedicalCondition);
}
