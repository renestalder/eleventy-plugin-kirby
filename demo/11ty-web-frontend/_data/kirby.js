const { getAll } = require("../../../.eleventy");

module.exports = async function () {
  const data = await getAll();

  console.log(data);

  return data;
};
