module.exports = {
  getDocument,
  getImage,
};

function getDocument(site, id) {
  return site.entities.documents[id];
}

function getImage(site, id) {
  return site.entities.images[id];
}
