export interface PluginOptions<T = string> {
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
   * Write .eleventy-plugin-kirby-data-log.json to project folder, allowing to
   * inspect the data that is passed to the templates
   */
  dataLog: boolean;

  /**
   * Default plugin options for internal use
   * @private
   */
  _defaults?: PluginOptions<Object>;
}
