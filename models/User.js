const usersCollection = require("../db").collection("users");

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.register = function (req, res) {
  console.log("nice: ", usersCollection);

    usersCollection.findOne({
      username: this.data.username,
    }).then((response)=>{
        console.log("creation: ", response);
        if(!response){
            usersCollection.insertOne(this.data);
            res.status(200).json({
                message: "Account creation successful"
            });
        }else{
            res.status(400).json({
                message: "Account already exists"
            });
        }
    }).catch((err)=>{
        console.log("creation error: ", err);
    })
  
};

module.exports = User;
