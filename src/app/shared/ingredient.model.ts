export class Ingredient {
  private name: string;
  private amount: number;

  constructor($name: string, $amount: number) {
    this.name = $name;
    this.amount = $amount;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $amount
   * @return {number}
   */
  public get $amount(): number {
    return this.amount;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $amount
   * @param {number} value
   */
  public set $amount(value: number) {
    this.amount = value;
  }
}
