const optimize = path => {
  //copying path arr
  temp_path = JSON.parse(JSON.stringify(path));

  //removing consecutive same entries and merging.
  for (
    var i = 0, j = 1;
    i < temp_path.length - 1, j < temp_path.length;
    i++, j++
  ) {
    if (temp_path[i].direction == temp_path[j].direction) {
      temp_path[i].time += temp_path[j].time;
      //+ sign in next to convert string into number
      temp_path[i].time = +temp_path[i].time.toFixed(3);
      temp_path.splice(j, 1);
      i = i - 1;
      j = j - 1;
    } else {
      continue;
    }
  }
  return temp_path;
};

module.exports = optimize;
