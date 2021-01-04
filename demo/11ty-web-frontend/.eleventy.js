require("dotenv").config({ debug: process.env.DEBUG });
const eleventyPluginKirby = require("eleventy-plugin-kirby");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginKirby);

  return {
    dir: {
      output: "dist",
    },
  };
};
