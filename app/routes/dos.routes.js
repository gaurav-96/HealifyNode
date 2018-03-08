module.exports= function(app){
  var dos = require('../controllers/dos.controller.js');
  app.get('/dos/:mcId',dos.getDosForMedicalCondition);
}
