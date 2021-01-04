const fs = require("fs");

module.exports = {
  getTemplateOrFallback,
};

/**
 * Checks for existence of given template file and returns name or returns name of default
 */
function getTemplateOrFallback(templateName, fallbackTemplateName) {
  const checkFileExistsSync = (filepath) => {
    let flag = true;
    try {
      const path = `${process.cwd()}/_includes/${filepath}`;
      fs.accessSync(path, fs.constants.F_OK);
    } catch (e) {
      flag = false;
    }
    return flag;
  };

  if (fallbackTemplateName && !checkFileExistsSync(fallbackTemplateName)) {
    throw new Error(
      `The fallback template "${fallbackTemplateName}" for "${templateName}" couldn't be found.`
    );
  }

  if (checkFileExistsSync(templateName)) {
    return templateName;
  } else {
    console.log(
      `Template ${templateName} not found. Using fallback template ${fallbackTemplateName}`
    );

    return fallbackTemplateName;
  }
}
