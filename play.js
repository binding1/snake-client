const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ..."); //initializing game
setupInput(connect()); //calls back conn variable to setupInput