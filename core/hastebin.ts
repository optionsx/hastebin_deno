import { axios } from "../mod.ts";
import { randomAcceptLanguage, randomSecChUa } from "../utils/utilz.ts";

/**
 * @param code: the code to upload to hastebin
 * @param type: type of code (js, ts, py, etc)(optional)
 * @returns: link to the hastebin
 * @description: Uploads code to hastebin and returns the link
 * @example: await hasteBin("console.log('Hello World!')", "js") // https://hastebin.skyra.pw/xxxxxx.js
 */
export const hasteBin = async (
  code: string,
  type?: string,
): Promise<string> => {
  const { data } = await axios.post(
    "https://hastebin.skyra.pw/documents",
    code,
    {
      headers: {
        accept: "application/json",
        "accept-language": randomAcceptLanguage(),
        "cache-control": "no-cache",
        "content-type": "text/plain",
        pragma: "no-cache",
        "sec-ch-ua": randomSecChUa(),
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        Referer: "https://hastebin.skyra.pw/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    },
  );
  return `https://hastebin.skyra.pw/${data.key}${type ? `.${type}` : ""}`;
};
