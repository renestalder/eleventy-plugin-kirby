const { getAll } = require("eleventy-plugin-kirby");

module.exports = async function () {
  const data = await getAll();

  console.log(data);

  return data;
};
