import { divide } from "../src/calculator.js";

describe("divide function tests", () => {

  test("divides two valid numbers correctly", () => {
    expect(divide(2, 1)).toBe(2);
  });

  test("throws TypeError if first argument is not a number", () => {
    expect(() => divide("2", 1)).toThrow(TypeError);
  });

  test("throws TypeError if argument is NaN", () => {
    expect(() => divide(NaN, 1)).toThrow(TypeError);
  });

  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow(RangeError);
  });

  test("throws error if both arguments are invalid", () => {
    expect(() => divide("a", "b")).toThrow();
  });

});