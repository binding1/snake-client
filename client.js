const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: '50541' // PORT number here,
  });

  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => { //event that returns data to user
    console.log(data);
  });
  
  conn.on('connect', () => { //event to notify user that they are connected to server
    console.log('Successfully connected to the game server.')
    conn.write(`Name: JB`)
  });

  return conn;
};

module.exports = connect; //export connect function