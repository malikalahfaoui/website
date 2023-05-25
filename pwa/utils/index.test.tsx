import {
  sortByPosition,
  sortByTitle,
  extractHeadingsFromMarkdown,
  toLocaleDate,
  convertTime,
} from "./index";

describe("Utils Functions", () => {
  describe("sortByPosition", () => {
    test("sort objects by position in ascending order", () => {
      const a = { position: 3 };
      const b = { position: 1 };
      const c = { position: 2 };
      const sorted = [b, c, a].sort(sortByPosition);
      expect(sorted).toEqual([b, c, a]);
    });
  });

  describe("sortByTitle", () => {
    test("sort objects by title in alphabetical order", () => {
      const a = { title: "Apple" };
      const b = { title: "Banana" };
      const c = { title: "Orange" };
      const sorted = [b, c, a].sort(sortByTitle);
      expect(sorted).toEqual([a, b, c]);
    });
  });

  describe("extractHeadingsFromMarkdown", () => {
    test("extract headings of specified level from markdown content", () => {
      const content = "# Heading 1\n## Heading 2\n### Heading 3";
      const extracted = extractHeadingsFromMarkdown(content, 2);
      expect(extracted).toEqual(["Heading 2"]);
    });
  });

  describe("toLocaleDate", () => {
    test("convert date string to locale date format", () => {
      const date = "2023-05-25";
      const formatted = toLocaleDate(date);
      expect(formatted).toEqual("May 25, 2023");
    });

    test("accept custom options for formatting", () => {
      const date = "2023-05-25";
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const formatted = toLocaleDate(date, options);
      expect(formatted).toEqual("May 25, 2023");
    });
  });

  describe("convertTime", () => {
    test("convert time string to formatted time", () => {
      const time = "Thu May 25 2023 13:30:41";
      const converted = convertTime(time);
      expect(converted).toEqual("13:30");
    });
  });
});
