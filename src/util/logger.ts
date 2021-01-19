const LOGGER_BASE = "Kirby Plugin: ";

/**
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
