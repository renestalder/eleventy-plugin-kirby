/**
 * @internal
 */
export function log(message: string, obj?: Object) {
  if (process.env.DEBUG) {
    console.log(message);

    if (obj) {
      console.dir(obj);
    }
  }
}
