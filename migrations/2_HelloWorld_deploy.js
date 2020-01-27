const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Hello Again!", {value:1000000, from: accounts[0]}).then(function(){
      console.log("Success!");
    }).catch(function(err){
      console.log("error: " + err);
    });
  }).catch(function(err){
    console.log("Deploy failed " + err);
  });
};
