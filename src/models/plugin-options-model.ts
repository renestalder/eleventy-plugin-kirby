import { Options } from "./kirby/options-model";

export interface PluginSettings<T = string> {
  /**
   * The query for getting all language information. Will be merged with
   * the default query.
   */
  languagesQuery: T;

  /**
   * The query for getting all the CMS content. Will me merged with
   * the default query
   */
  pagesQuery: T;

  /**
   * Write to .eleventy-plugin-kirby folder, allowing to
   * inspect the queries, API results and the data that is passed to the templates
   */
  debug: boolean;

  /**
   * Reflects the Kirby configuration options that have similar
   * effect on the client-side. Those options do not change any
   * settings that are part of the config.php of your Kirby instance.
   * Those affect your queries only and therefore, only a subset
   * of the original options are available.
   * @see https://getkirby.com/docs/reference/system/options
   */
  options?: Partial<Options>;

  /**
   * Default plugin options for internal use
   * @private
   */
  _defaults?: PluginSettings<Object>;
}
