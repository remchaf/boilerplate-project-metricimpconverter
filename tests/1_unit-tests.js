const chai = require("chai");
const { describe } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("1 - Reading a whole number", function () {
    assert.typeOf(
      convertHandler.getNum("10gal"),
      "number",
      "Should correctly read a whole number input"
    );
  });
  test("2 - Reading a decimal nuumber", function () {
    assert.typeOf(
      convertHandler.getNum("230.6652L"),
      "number",
      "Should correctly read a decimal number input"
    );
  });

  test("3 - Reading a fractional input", function () {
    assert.typeOf(
      convertHandler.getNum("2/5km"),
      "number",
      "Should correctly read a fractional input"
    );
  });

  test("4 - Reading a fraction input with a decimal", function () {
    assert.typeOf(
      convertHandler.getNum("0.5/2mi"),
      "number",
      "Should correctly read a fraction input with a decimal"
    );
  });

  test("5 - Return an error on a double-fraction (3/2/3)", function () {
    assert.typeOf(
      convertHandler.getNum("2/2/2gal"),
      "error",
      "Should correctly return an error on a double-fraction(i.e 3/2/3)"
    );
  });

  test("6 - Default to 1 when no numerical input is provided", function () {
    assert.equal(
      convertHandler.getNum(),
      1,
      "Should correctly default to  1 when no numerical input is provided"
    );
  });

  test("7 - Reading a valid input unit", function () {
    ["gal", "L", "mi", "lbs", "kg", "km"].forEach((unit) => {
      assert.notEqual(
        convertHandler.getUnit(unit),
        "invalid unit",
        "7 - Should correctly read each valid input unit"
      );
    });
  });

  test("8 - Error for an invalid input", function () {
    assert.typeOf(
      convertHandler.getUnit("654werg"),
      "error",
      "should return an error"
    );
  });

  test("9 - Return the spelled-out string unit for each value unit", function () {
    const units = [
      "gal converts to L",
      "L converts to gal",
      "mi converts to km",
      "km converts to mi",
      "lbs converts to kg",
      "kg converts to lbs",
    ];
    assert.include(convertHandler.spellOutUnit("gal"), units);
  });
});
