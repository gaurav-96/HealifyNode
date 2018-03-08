module.exports= function(app){
  var medicalConditions = require('../controllers/medicalCondition.controller.js');
  app.get('/medicalConditions',medicalConditions.getAllMedicalConditions);
}
