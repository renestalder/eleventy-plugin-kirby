require("dotenv").config({ debug: process.env.DEBUG });
const eleventyPluginKirby = require("../../dist/index");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginKirby);

  return {
    dir: {
      output: "dist",
    },
  };
};
