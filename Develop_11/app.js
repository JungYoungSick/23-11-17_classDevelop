function three(number) {
  if (typeof (number) === "number") {
    return `${number / 10}`;
  }
}
const threeResult = three(100);

function four(number, callback) {
  if (typeof (number) === "number") {
    return callback(number);
  }
}

const fourResult = four(1, function (number) {
  return `${number / 10}`;
});
console.log(fourResult); 