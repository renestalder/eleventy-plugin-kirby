module.exports = {
  log,
};

function log(message, obj) {
  console.log(message);

  if (obj) {
    console.dir(obj);
  }
}
