const fs = require("fs");

const optimize = require("./optimize_path");

let prs_data;
let rawdata;
let data;

const creation = (object, path) => {
  //optimising path by eliminating two consecutive same path direction
  path = optimize(path);

  let combined = {
    object,
    path
  };

  //file handling json

  rawdata = fs.readFileSync("data.json");
  // console.log(rawdata.length);
  if (rawdata.length == 0) {
    fs.writeFileSync("data.json", "[]");
    rawdata = fs.readFileSync("data.json");
    prs_data = JSON.parse(rawdata);
    prs_data.push(combined);
    data = JSON.stringify(prs_data);
    console.log(data);
    fs.writeFileSync("data.json", data);
  } else {
    rawdata = fs.readFileSync("data.json");
    prs_data = JSON.parse(rawdata);
    prs_data.push(combined);
    data = JSON.stringify(prs_data);
    fs.writeFileSync("data.json", data);
  }
};

module.exports = creation;
