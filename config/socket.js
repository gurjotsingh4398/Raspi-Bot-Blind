//const controls = require("./controls");

let path = [];

let soc = socket => {
  socket.on("connection", user => {
    console.log("connected server");
    user.on("arrow", state => {
      if (state.state == "stop") {
        socket.emit("actualState", state.state); // broadcasting to every user
        //controls.stop();
        path.push({
          direction: state.direction,
          time: state.time
        });
      } else {
        let str = "";
        if (state == "up") {
          str = "Moving Forward";
          //controls.forward();
        }
        if (state == "left") {
          str = "Moving Left";
          //controls.left();
        }
        if (state == "right") {
          str = "Moving Right";
          //controls.right();
        }
        if (state == "down") {
          str = "Moving Backward";
          //controls.backward();
        }
        socket.emit("actualState", str); // broadcasting to every user
      }
    });
  });
};

module.exports = {
  path,
  soc
};
