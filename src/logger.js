module.exports = {
  log,
};

function log(message, obj) {
  if (process.env.DEBUG) {
    console.log(message);

    if (obj) {
      console.dir(obj);
    }
  }
}
