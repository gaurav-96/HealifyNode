var mysql = require('../mysql/mysql').pool;

exports.getDontsForMedicalCondition = function(req,res){
  mysql.getConnection(function(error,connection){
    if(error){
      res.send(error);
    }else if(req.params.mcId){
      connection.query('select * from donts where mc_id = ?',req.params.mcId,function(error,result){
        if(error){
          res.send(error);
        }else{
          res.send(result);
        }
      });
    }
    else{
      res.send({"error":"Medical Condition ID Not Specified"});
    }
  });
};
