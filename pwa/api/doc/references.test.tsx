import { sortByTitle } from "utils";
import { getReferencesSummary } from "./references";

describe("getReferencesSummary", () => {
  it("should return the references summary", async () => {
    const summary = await getReferencesSummary();

    expect(Array.isArray(summary)).toBe(true);

    summary.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("links");
      expect(Array.isArray(item.links)).toBe(true);

      item.links.forEach((link) => {
        expect(link).toHaveProperty("title");
        expect(link).toHaveProperty("link");
        expect(link).toHaveProperty("type");
      });
    });
  });
  it("should sort the links by title", () => {
    const links = [
      { title: "Zebra", link: "/docs/reference/zebra", type: "animal" },
      { title: "Apple", link: "/docs/reference/apple", type: "fruit" },
      { title: "Banana", link: "/docs/reference/banana", type: "fruit" },
    ];

    const sortedLinks = links.sort(sortByTitle);

    expect(sortedLinks).toEqual([
      { title: "Apple", link: "/docs/reference/apple", type: "fruit" },
      { title: "Banana", link: "/docs/reference/banana", type: "fruit" },
      { title: "Zebra", link: "/docs/reference/zebra", type: "animal" },
    ]);
  });
});
