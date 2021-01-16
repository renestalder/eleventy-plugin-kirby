export interface PluginOptions<T = string> {
  languagesQuery: T;
  pagesQuery: T;
  _defaults?: PluginOptions<Object>;
}
