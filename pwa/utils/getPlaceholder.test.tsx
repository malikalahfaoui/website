import { getPlaceholder } from "./getPlaceholder";

describe("getPlaceholder", () => {
  it("will generate a placeholder image", async () => {
    const imagePath = "./public/images/con/2022/pic-01.jpg";
    const placeholder = await getPlaceholder(imagePath);
    expect(placeholder).toMatch(/^data:image\/jpeg;base64,/);
  });

  it("should throw an error if placeholder generation fails", async () => {
    const imagePath = "invalid/path/to/image.jpg";

    await expect(getPlaceholder(imagePath)).rejects.toThrow();
  });
});
