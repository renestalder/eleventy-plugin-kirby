module.exports = {
  toBlocks
}

function toBlocks(blocksField) {
  try {
    return JSON.parse(blocksField);
  } catch(e) {
    console.log(e);
  }

  return [];
}
