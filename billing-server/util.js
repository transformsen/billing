const moment = require('moment');

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomRange = randomRange;

const pickOne = (arr) => {
  const i = randomRange(0, arr.length - 1);

  return arr[i];
}
exports.pickOne = pickOne;


const randomDate = () => {
  return moment(new Date(randomRange(1548946800000, Date.now())).toISOString()).format('MM/DD/YYYY');
}
exports.randomDate = randomDate;


