export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  /**
   * Creates a new instance of the class.
   *
   * @param name - The name of the item.
   * @param desc - The description of the item.
   * @param imagePath - The path to the image of the item.
   */
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
