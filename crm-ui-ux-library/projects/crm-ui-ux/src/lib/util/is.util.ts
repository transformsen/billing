import {to} from './to.util';

export const is = {
  /**
   * return true when value is empty string
   * @param value value
   */
  EmptyString(value: string) {
    return typeof value === 'string' && value.trim() === '';
  },
  /**
   * return true when value is undefined or null;
   * @param value value
   */
  UndefinedOrNull(value: any) {
    return value === undefined || value === null;
  },
  /**
   * return true when value is formatted ssn
   * @param value value
   */
  SSN(value: string) {
    return !!/\d{3}-\d{2}-\d{4}/.exec(value);
  },
  /**
   * return true when value is formatted date
   * @param value value
   */
  formattedDate(value: string) {
    return !!/\d{2}\/\d{2}\/\d{4}/.exec(value)
      && to.Int(value.substr(0, 2)) <= 12
      && to.Int(value.substr(3, 2)) <= 31;
  },
  /**
   * return true when value is empty array
   * @param value value
   */
  EmptyArray(value: any[]) {
    return value instanceof Array && value.length === 0;
  },
  /**
   * return true when value is boolean type false
   * @param value value
   */
  False(value: boolean) {
    return value === false;
  },
  /**
   * return true when string value is number
   * @param value value
   */
  Number(value: string) {
    return !!/^[0-9]+$/gm.exec(value);
  },
  /**
   * return true when value is integer string
   * @param value value
   * @param unsigned use unsigned integer
   */
  Integer(value: string | number, unsigned: boolean) {
    if (typeof value === 'number') {
      value = value.toString();
    }

    if (unsigned) {
      return /^[+]?[0-9]+$/gm.exec(value);
    } else {
      return /^[+-]?[0-9]+$/gm.exec(value);
    }
  },
  /**
   * return true when value is floating point number string
   * @param value value
   * @param unsigned use unsigned float
   */
  Float(value: string | number, unsigned: boolean = false) {
    if (typeof value === 'number') {
      value = value.toString();
    }

    if (unsigned) {
      return /^(([+])?(0|([1-9][0-9]*))(\.[0-9]+)?)$/gm.exec(value);
    } else {
      return /^(([+-])?(0|([1-9][0-9]*))(\.[0-9]+)?)$/gm.exec(value);
    }
  },
  /**
   * return true when value is exists
   * @param value any value
   */
  Exists(value: any) {
    return value !== undefined && value !== null;
  },
};
