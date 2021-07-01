const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to server")
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Name: SNH');
    //conn.write('Move: up');
  });

  return conn;
};

//console.log("Connecting ...");
module.exports = {connect} 