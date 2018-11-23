const fs = require("fs");
const async = require("async");

// const controls = require("../config/controls");
const timeFor180 = 10; //constant for bot
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
  let arr = prs_data[index].path;
  let fun_series = [];

  //running bot to the location
  for (let i = 0; i < arr.length; i++) {
    let dir = arr[i].direction;
    let time = arr[i].time;

    if (dir == "up") {
      let up = callback => {
        console.log("up");
        //controls.up();
        setTimeout(function() {
          console.log("stop");
          //controls.stop();
          callback(null, 1);
        }, time * 1000);
      };
      fun_series.push(up);
    } else if (dir == "down") {
      let down = callback => {
        console.log("down");
        //controls.down();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 2);
        }, time * 1000);
      };
      fun_series.push(down);
    } else if (dir == "left") {
      let left = callback => {
        console.log("left");
        //controls.left();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 3);
        }, time * 1000);
      };
      fun_series.push(left);
    } else if (dir == "right") {
      let right = callback => {
        console.log("right");
        //controls.right();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 4);
        }, time * 1000);
      };
      fun_series.push(right);
    }
  }

  //running bot back to start position
  temp_arr = JSON.parse(JSON.stringify(arr));
  temp_arr.reverse();

  for (let i = 1; i < temp_arr.length; i++) {
    let dir = temp_arr[i].direction;
    let time = temp_arr[i].time;
    if (dir == "up") {
      let up = callback => {
        console.log("rev up");
        //controls.up();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 1);
        }, time * 1000);
      };
      fun_series.push(up);
    } else if (dir == "down") {
      let down = callback => {
        console.log("rev down");
        //controls.down();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 2);
        }, time * 1000);
      };
      fun_series.push(down);
    } else if (dir == "left") {
      let right = callback => {
        console.log("rev left");
        // controls.right();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 3);
        }, time * 1000);
      };
      fun_series.push(right);
    } else if (dir == "right") {
      let left = callback => {
        console.log("rev right");
        // controls.left();
        setTimeout(function() {
          //controls.stop();
          console.log("stop");
          callback(null, 4);
        }, time * 1000);
      };
      fun_series.push(left);
    }
  }

  //making a 180 deg turn
  let time_last = temp_arr[0].time;
  let left = callback => {
    console.log("rev right");
    // controls.left();
    setTimeout(function() {
      //controls.stop();
      console.log("stop");
      callback(null, 4);
    }, time_last * 1000);
  };
  fun_series.push(left);

  async.series(fun_series, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
  });
};

module.exports = identify;
