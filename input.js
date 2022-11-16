const { connect } = require("http2");
const { stdin } = require("process");

let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('Game exiting...')
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'j') {
    connection.write('Say: Hi!');
  } else if (key === 'k') { 
    connection.write("Say: I'm gonna win!");
  } else if (key === 'l') {
    connection.write("Say: GG!");
  }
}; 

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {
  setupInput
};

