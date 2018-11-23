const fs = require("fs");

// const controls = require("../config/controls");
const timeFor180 = 3000; //constant for bot
let rawdata;
let prs_data;

const identify = find => {
  console.log("identify");
  rawdata = fs.readFileSync("data.json");
  prs_data = JSON.parse(rawdata);
  console.log(prs_data, prs_data.path);
  let index = -1;
  for (var i = 0; i < prs_data.length; i++) {
    if (prs_data[i].object === find) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    //speecch of object not found
  } else {
    console.log("else");
    run_bot(index);
  }
};

const run_bot = index => {
  console.log("run");
  let arr = prs_data[index].path;
  console.log("arr", arr);
  //running bot to the location
  for (let i = 0; i < arr.length; i++) {
    let dir = arr[i].direction;
    let time = arr[i].time;
    if (dir == "up") {
      console.log("up");
      // controls.up();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "down") {
      console.log("down");
      // controls.down();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "left") {
      console.log("left");
      // controls.left();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "right") {
      console.log("right");
      // controls.right();
      // setTimeout(controls.stop, time * 1000);
    }
  }
  //making a 180 deg turn

  // controls.left();
  // setTimeout(controls.stop, timeFor180 * 1000);

  //running bot back to start position
  temp_arr = JSON.parse(JSON.stringify(arr));
  temp_arr.reverse();

  for (let i = 0; i < temp_arr.length; i++) {
    let dir = temp_arr[i].direction;
    let time = temp_arr[i].time;
    if (dir == "up") {
      console.log("up");

      // controls.up();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "down") {
      console.log("down");

      // controls.down();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "left") {
      console.log("left");

      // controls.right();
      // setTimeout(controls.stop, time * 1000);
    } else if (dir == "right") {
      console.log("right");

      // controls.left();
      // setTimeout(controls.stop, time * 1000);
    }
  }

  //making a 180 deg turn

  // controls.left();
  // setTimeout(controls.stop, timeFor180 * 1000);
};

module.exports = identify;
