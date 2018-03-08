var mysql = require('../mysql/mysql').pool;

exports.render = function(req,res){
  res.send('Welcome to the Playground');
};
