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
   * Default plugin options for internal use
   * @private
   */
  _defaults?: PluginOptions<Object>;
}
