import * as fs from "fs";

export const PLACEHOLDER_IMAGE_SRC = "{{IMAGE_SRC}}";
export const PLACEHOLDER_IMAGE_SRCSET = "{{IMAGE_SRCSET}}";
export const DEFAULT_IMAGE_SRC = 1220;
export const DEFAULT_IMAGE_SRCSET = [312, 480, 768, 1024, 1220, 1440];

export function loadQueryFromFile(absolutePath: string): object {
  try {
    let queryFile = fs.readFileSync(absolutePath, "utf8");
    const query = JSON.parse(queryFile);

    return query;
  } catch (e) {
    throw new Error(e);
  }
}

export function applyQueryProcessors<T = string | object>(query: T): string {
  let queryString: string;
  if (typeof query === "string") {
    queryString = query;
  } else {
    queryString = JSON.stringify(query);
  }

  queryString = queryString.replace(
    PLACEHOLDER_IMAGE_SRC,
    DEFAULT_IMAGE_SRC.toString()
  );
  queryString = queryString.replace(
    PLACEHOLDER_IMAGE_SRCSET,
    `[${DEFAULT_IMAGE_SRCSET.join()}]`
  );

  return queryString;
}
