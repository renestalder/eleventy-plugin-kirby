module.exports = {
  getLanguagesByCodes,
  getLanguageByCode,
};

function getLanguageByCode(code) {
  if (!code) {
    return "";
  }

  return {
    name: new Intl.DisplayNames([code], { type: "language" }).of(code),
    code,
  };
}

function getLanguagesByCodes(languageCodes = []) {
  return (Array.isArray(languageCodes)
    ? languageCodes
    : Object.values(languageCodes)
  ).map((code) => getLanguageByCode(code));
}
