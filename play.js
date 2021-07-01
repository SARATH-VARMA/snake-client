const { connect } = require('./client.js')

console.log("Connecting ...");
let conn = connect();

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
