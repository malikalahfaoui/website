import { enableFetchMocks } from "jest-fetch-mock";
import { NextRequest } from "next/server";
import { getLocale } from "./middleware";

enableFetchMocks();

describe("getLocale", () => {
  test("returns the matched locale", () => {
    const request = new NextRequest(
      new URL("https://api-platform.com/con/2023/speakers/")
    );
    request.headers.set("accept-language", "en-US,en;q=0.9,fr;q=0.8");

    const result = getLocale(request);

    expect(result).toEqual("en");
  });
});
