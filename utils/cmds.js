const passwords = {
  wifi: 123,
  mac: "mac123"
};

function get(key) {
  return passwords[key];
}

function set(key, value) {
  passwordsl[key] = value;
}

function unset(key) {
  delete passwords[key];
}
// module.exports = {
//   get,
//   set,
<<<<<<< Updated upstream
unset;
=======
// unset
>>>>>>> Stashed changes
// }

exports.get = get;
exports.set = set;
exports.unset = unset;
