module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "0.8.13"
    }
  },
  
  networks: {
    develop: {
      port: 9545
    }
  }
};