module.exports = {
  file,
  image,
};

/**
 * Returns a specific file by filename (id)
 * @param {object} site Kirby object
 * @param {string} filename Filename/id of the file
 * @return {object}
 */
function file(site, filename) {
  return site.entities.documents[filename];
}

/**
 * Returns a specific image by filename (id)
 * @param {object} site Kirby object
 * @param {string} filename Filename/id of the file
 * @return {object}
 */
function image(site, filename) {
  return site.entities.images[filename];
}
