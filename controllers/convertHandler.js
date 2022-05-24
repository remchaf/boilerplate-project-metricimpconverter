function ConvertHandler() {
  const index = (i) => i.split("").findIndex((f) => /[a-z]/i.test(f));
  const units = ["gal", "l", "mi", "km", "lbs", "kg"];

  this.getNum = function (input) {
    if (input == "" || /[a-z]/i.test(input[0])) return 1;

    const num = input.slice(0, index(input));
    let result = "invalid number";

    if (!/\//.test(num) || num.match(/\//g).length == 1) {
      // or if(num.split("/").length <= 2)
      try {
        result =
          Function("return " + num)() -
            Math.floor(Function("return " + num)()) ==
          0
            ? Function("return " + num)()
            : Number(Function("return " + num)().toFixed(5));
      } catch {}
    }

    return result;
  };

  this.getUnit = function (input) {
    if (input == "") {
      return "gal";
    }
    if (index(input) == -1) return "invalid unit";

    const unit = input.slice(index(input)).toLowerCase();
    if (units.indexOf(unit) == -1) return "invalid unit"; // or if( !units.include(unit) ) return "invalid number"

    return unit.length == 1 ? "L" : unit.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;

      case "L":
        result = "gal";
        break;

      case "lbs":
        result = "kg";
        break;

      case "kg":
        result = "lbs";
        break;

      case "mi":
        result = "km";
        break;

      case "km":
        result = "mi";
        break;

      default:
        result = "invalid unit";
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;

      case "L":
        result = "liters";
        break;

      case "mi":
        result = "miles";
        break;

      case "km":
        result = "kilometers";
        break;

      case "kg":
        result = "kilograms";
        break;

      case "lbs":
        result = "pounds";
        break;

      default:
        result = "unknown unit";
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;

      case "L":
        result = initNum / galToL;
        break;

      case "lbs":
        result = initNum * lbsToKg;
        break;

      case "kg":
        result = initNum / lbsToKg;
        break;

      case "mi":
        result = initNum * miToKm;
        break;

      case "km":
        result = initNum / miToKm;
        break;

      default:
        result = 3.1 * miToKm;
        break;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };
}

module.exports = ConvertHandler;
