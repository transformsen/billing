export const to = {
  /**
   * ssn formatted value to default string
   * @param value ssn formatted value
   */
  ssnToString(value: string) {
    return value.replace(/(\s|-)/g, '');
  },
  /**
   * change string to ssn format
   * @param value value
   */
  SSN(value: string) {
    value = this.ssnToString(value);

    let first = value.substr(0, 3);
    let second = value.substr(3, 2);
    let last = value.substr(5, 4);

    first = this.spaceFilledString(first, 3);
    second = this.spaceFilledString(second, 2);
    last = this.spaceFilledString(last, 4);

    return `${first}-${second}-${last}`;
  },
  /**
   * date formatted value to default string
   * @param value date formatted value
   */
  dateToString(value: string) {
    return value.replace(/(\s|\/)/g, '');
  },
  /**
   * change string to formatted date
   * @param value value
   */
  formattedDate(value: string) {
    value = this.dateToString(value);

    let first = value.substr(0, 2);
    let second = value.substr(2, 2);
    let last = value.substr(4, 4);

    first = this.spaceFilledString(first, 2);
    second = this.spaceFilledString(second, 2);
    last = this.spaceFilledString(last, 4);

    return `${first}/${second}/${last}`;
  },
  /**
   * fill spaces on the last of the string for meeting specific length
   * @param value string value
   * @param length total string length
   */
  spaceFilledString(value: string, length: number) {
    if (value.length < length) {
      let diff = length - value.length;

      while (diff > 0) {
        value += ' ';
        diff--;
      }
    }

    return value;
  },
  /**
   * transform to integer
   * @param value string or number
   */
  Int(value: string | number) {
    if (typeof value === 'string') {
      return parseInt(value, null);
    } else {
      return value;
    }
  },
  /**
   * transform to floating point number
   * @param value string or number
   */
  Float(value: string | number) {
    if (typeof value === 'string') {
      return parseFloat(value);
    } else {
      return value;
    }
  },
};
