export default class Utils {
  static formatMonetaryNumber(value: number): string {
    return `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  static isEmpty(prop: string) {
    return !prop || prop === null || prop.trim() === "";
  }
  static isNotEmpty(prop: string) {
    return !Utils.isEmpty(prop);
  }
}
