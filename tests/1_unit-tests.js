const chai = require("chai");
const { describe } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();
const units = ["gal", "L", "mi", "km", "lbs", "kg"];

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
    assert.equal(
      convertHandler.getNum("2/2/2gal"),
      "invalid number",
      "Should correctly return an error on a double-fraction(i.e 3/2/3)"
    );
  });

  test("6 - Default to 1 when no numerical input is provided", function () {
    assert.equal(
      convertHandler.getNum(""),
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
    assert.equal(
      convertHandler.getUnit("654werg"),
      "invalid unit",
      "should return an error"
    );
  });
  test("9 - Return unit for each valid inpiut unit", function () {
    units.forEach((unit) => {
      assert.include(
        units,
        convertHandler.getReturnUnit(unit),
        "convertHandler should return the correct return unit for each valid input unit"
      );
    });
  });

  test("10 - Return the spelled-out string unit for each value unit", function () {
    const spelled = [
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms",
    ];
    units.forEach(function (u) {
      assert.include(
        spelled,
        convertHandler.spellOutUnit(u),
        "Should correctly return the spelled-out string unit for valid inputs"
      );
    });
  });

  test("11 - Convert gal to L", function () {
    assert.equal(
      convertHandler.getReturnUnit("gal"),
      "L",
      "should correctly convert gal to L"
    );
  });

  test("12 - Convert L to gal", function () {
    assert.equal(
      convertHandler.getReturnUnit("L"),
      "gal",
      "should correctly convert L to gal"
    );
  });

  test("13 - Convert mi to km", function () {
    assert.equal(
      convertHandler.getReturnUnit("mi"),
      "km",
      "should correctly convert mi to km"
    );
  });

  test("14 - Convert km to mi", function () {
    assert.equal(
      convertHandler.getReturnUnit("km"),
      "mi",
      "should correctly convert km to mi"
    );
  });

  test("15 - Convert lbs to kg", function () {
    assert.equal(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "should correctly convert lbs to kg"
    );
  });

  test("16 - Convert kg to lbs", function () {
    assert.equal(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "should correctly convert kg to lbs"
    );
  });
});
