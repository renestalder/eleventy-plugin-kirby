import deepmerge from "deepmerge";
import { PluginSettings } from "../models/plugin-options-model";
import { getData } from "../util/api";
import { log } from "../util/logger";
import { loadQueryFromFile } from "../util/queries";

export async function getLanguages(opts: Partial<PluginSettings>) {
  let query = opts._defaults.languagesQuery;

  if (opts.languagesQuery) {
    const userDefinedLanguagesQuery = loadQueryFromFile(opts.languagesQuery);
    query = deepmerge(query, userDefinedLanguagesQuery);
  }

  log(`Get languages`);
  const languages = await getData(query);

  if (languages.length === 0) {
    log("...No languages found. Assuming single language setup.");
  } else {
    log("Languages retrieved", languages);
  }

  return languages;
}
