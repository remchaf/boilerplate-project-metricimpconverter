function ConvertHandler(param) {
  const indx = param.split("").findIndex((i) => /[a-z]/i.test(i));

  this.getNum = function (input) {
    let result = Number(input.slice(0, indx));
    return result;
  };

  this.getUnit = function (input) {
    let result = input.slice(indx).toLowerCase();

    return result;
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

      case "mi":
        result = "km";
        break;

      case "km":
        result = "mi";
        break;

      case "kg":
        result = "lbs";
        break;

      case "lbs":
        result = "kg";
        break;

      default:
        result = "invalid unit";
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

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
    let result;

    /*
    if (initUnit == "invalid unit" && initNum == "invalid number") {
      result = "invalid number and unit";
    } else if (initUnit == "invalid unit") {
      result = "invalid unit";
    } else if (initNum == "invalid number") {
      result = "invalid number";
    } else {
      result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    }
    */

    result = {
      initNum, initUnit, returnNum, returnUnit,
      string:  `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`
    };

    return result;
  };
}

module.exports = ConvertHandler;
