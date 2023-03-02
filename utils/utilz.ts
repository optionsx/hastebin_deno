import { listOfAcceptLanguage, listoFSecChUa } from "../constants/constants.ts";
export const encodeURL = (url: string): string => {
  const encodedURL = encodeURIComponent(url);
  return encodedURL.replace(/%20/g, "+");
};

export const randomSecChUa = (): string => {
  return listoFSecChUa[Math.floor(Math.random() * listoFSecChUa.length)];
};

export const randomAcceptLanguage = (): string => {
  return listOfAcceptLanguage[
    Math.floor(Math.random() * listOfAcceptLanguage.length)
  ];
};
