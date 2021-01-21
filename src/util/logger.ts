import * as fs from "fs";

const LOGGER_BASE = "Kirby Plugin:";
const LOGGER_FS_DIR = `${process.cwd()}/.eleventy-plugin-kirby`;

/**
 * Log message to console
 * @internal
 */
export function log(message: string, obj?: Object) {
  if (process.env.DEBUG) {
    console.log(`${LOGGER_BASE} ${message}`);

    if (obj) {
      console.dir(obj);
    }
  }
}

/**
 * Log to filesystem, into <projectfolder>/.eleventy-plugin-kirby, as JSON file
 * @internal
 * @param {string} name Name of the log file, without extension
 * @param {object} obj Object to log to the file
 */
export function logFs(name, obj, opts) {
  if (opts.debug) {
    try {
      if (!fs.existsSync(LOGGER_FS_DIR)) {
        fs.mkdirSync(LOGGER_FS_DIR);
      }

      fs.writeFileSync(
        `${LOGGER_FS_DIR}/${name}.json`,
        JSON.stringify(obj, null, 2),
        "utf8"
      );
    } catch (e) {
      console.error(`Error writing Kirby data log file: ${e}`);
    }
  }
}
