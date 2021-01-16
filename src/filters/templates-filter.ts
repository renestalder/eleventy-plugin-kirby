import * as fs from "fs";

export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(fallbackTemplate.name, fallbackTemplate);
}

/**
 * Checks for existence of given template file and returns name or returns name of default
 */
export function fallbackTemplate(templateName, fallbackTemplateName) {
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
