const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => { //event that logs game data to user
    console.log(data);
  });
  
  conn.on('connect', () => { //event to notify user that they are connected to server
    console.log('Successfully connected to the game server.');
    conn.write(`Name: JB`);
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 50);
  });
  
  return conn;
};

module.exports = {//export connect function
  connect
 }; 