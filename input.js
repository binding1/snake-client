const { connect } = require("http2");
const { stdin } = require("process");

let connection;

let keyPressClear;

const handleUserInput = function(key) { //function which is an event listener for user input

  const keyPress = (key) => { //function that makes snake move continuously in direction
    keyPressClear = setInterval(() => {
      connection.write(key);
    }, 50);
  };

  if (key === '\u0003') {
    console.log('Game exiting...');
    process.exit();
  } else if (key === 'w') {
    clearInterval(keyPressClear); //clears previous interval input so snake doesn't take combined directions i.e. diagonal
    keyPress('Move: up');
  } else if (key === 'a') {
    clearInterval(keyPressClear);
    keyPress('Move: left');
  } else if (key === 's') {
    clearInterval(keyPressClear);
    keyPress('Move: down');
  } else if (key === 'd') {
    clearInterval(keyPressClear);
    keyPress('Move: right');
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

