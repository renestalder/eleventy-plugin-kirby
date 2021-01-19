import fetch from "node-fetch";
import { log } from "./logger";
import { applyQueryProcessors } from "./queries";

export const ENDPOINT = `${process.env.API_KIRBYCMS_PATH}/api/query`;

/**
 * Set these login credentials in your .env file
 */
const basicAuthCredentials = Buffer.from(
  `${process.env.API_KIRBYCMS_USER}:${process.env.API_KIRBYCMS_PASSWORD}`
).toString("base64");

/**
 * Default API fetch options required to get data from Kirby CMS
 */
export const defaultFetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicAuthCredentials}`,
  },
};

/**
 * Get a list of all pages including their children
 */
export async function getData(query, headers?: object) {
  log(`Querying ${ENDPOINT}`);

  const body = applyQueryProcessors(query);

  // @ts-ignore
  const response = await fetch(ENDPOINT, {
    ...defaultFetchOptions,
    headers: {
      ...defaultFetchOptions.headers,
      ...(headers || {}),
    },
    body,
  });

  const json = await response.json();
  if (json.code !== 200) {
    log("Error retrieving data", json);
  }

  return json.result;
}
