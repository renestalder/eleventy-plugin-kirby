const { getAll } = require("../../../dist/queries/getAll");

module.exports = async function () {
  const data = await getAll({
    dataLog: true,
  });

  return data;
};
