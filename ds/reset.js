const fs = require("fs");

const reset = () => {
  fs.writeFileSync("data.json", "");
};

module.exports = reset;
