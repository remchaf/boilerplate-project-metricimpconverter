function ConvertHandler() {
  const index = (i) => i.split("").findIndex((f) => /[a-z]/i.test(f));
  const units = ["gal", "l", "mi", "km", "lbs", "kg"];

  this.getNum = function (input) {
    if (input == undefined || /[a-z]/i.test(input[0])) return 1;

    const num = input.slice(0, index(input));
    let result = new Error("invalid number");

    if (!/\//.test(num) || num.match(/\//g).length == 1) {
      try {
        result = Function("return " + num)();
      } catch {}
    }

    return result;
  };

  this.getUnit = function (input) {
    if (input == "") {
      return "gal";
    }
    if (index(input) == -1) return new Error("invalid unit");

    const unit = input.slice(index(input));
    if (units.indexOf(unit.toLowerCase()) == -1)
      return new Error("invalid unit");

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
        result = "gal converts to L";
        break;

      case "L":
        result = "L converts to gal";
        break;

      case "mi":
        result = "mi converts to km";
        break;

      case "km":
        result = "km converts to mi";
        break;

      case "kg":
        result = "kg converts to lbs";
        break;

      case "lbs":
        result = "lbs converts to kg";
        break;

      default:
        result = "invalid unit";
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

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
