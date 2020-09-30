
exports.min = function min (array) {
  if (!array) {
    return 0;
  }
else {
   var len = array.length, min = Infinity;
   while (len--) {
    if (array[len] < min) {
     min = array[len];
      }
    }
  }
  if (min == Infinity) {
  return 0;
  }
  else return min;
}

exports.max = function max (array) {
  if (!array) {
    return 0;
  }
else {
   var len = array.length, max = -Infinity;
   while (len--) {
    if (array[len] > max) {
     max = array[len];
      }
    }
  }
  if (max == -Infinity) {
  return 0;
  }
  else return max;
}

exports.avg = function avg (array) {
  if (!array) {
    return 0;
}
else {
    var len = array.length;
    var sum = 0;
    for (i=0; i<len; i++) {
        sum +=array[i];
    }
}
if (sum ===0) {
    return 0;
}
else return sum/array.length;
}
