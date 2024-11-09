export default class Utils {
  static formatMonetaryNumber(value: number | null | undefined): string {
    if (!value) {
      return "0.00";
    }

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

  static DateTomorrow() {
    var date = new Date();

    date.setDate(date.getDate() + 1);
    return date;
  }
}
