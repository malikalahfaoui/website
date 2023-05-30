import { getTranslation } from "./translation";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("react-dom/server", () => {}, { virtual: true });

describe("Translation", () => {
  it("should return the key if translation is not found", async () => {
    const locale = "en";
    const translation = await getTranslation(locale);
    const translatedText = translation("KEY_NOT_FOUND");
    expect(translatedText).toEqual("KEY_NOT_FOUND");
  });
  it("should return the value if translation is found", async () => {
    const locale = "en";
    const translation = await getTranslation(locale);
    const translatedText = translation("2021.covid.pass_link");
    expect(translatedText).toEqual("(Pass sanitaire)");
  });
});
