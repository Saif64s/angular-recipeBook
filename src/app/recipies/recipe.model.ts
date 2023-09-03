export class Recipe {
  private name: string;
  private description: string;
  private imagePath: string;

  constructor($name: string, $description: string, $imagePath: string) {
    this.name = $name;
    this.description = $description;
    this.imagePath = $imagePath;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $imagePath
   * @return {string}
   */
  public get $imagePath(): string {
    return this.imagePath;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $imagePath
   * @param {string} value
   */
  public set $imagePath(value: string) {
    this.imagePath = value;
  }
}
