const {createId} = require("../transformer")

module.exports = {
  getPageById,
  getPagesByIds,
};

function getPageById(pages, id, languageCode) {
  let page;

  if (languageCode) {
    page = pages[createId({id}, languageCode)];
  } else {
    page = pages[`${id}`];
  }

  if (!page) {
    console.info(
      `getPageById([pages], ${id}, ${languageCode}): No page found.`
    );
  }

  return page;
}

function getPagesByIds(pages, ids, languageCode) {
  if (!pages || !ids) {
    return null;
  }

  return ids.map((id) => getPageById(pages, id, languageCode));
}
