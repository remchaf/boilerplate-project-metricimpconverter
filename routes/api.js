"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  app.route("/api/convert").get((req, res) => {
    const param = req.query.input;
    console.log(param);
    let convertHandler = new ConvertHandler();
    let response;
    const initNum = convertHandler.getNum(param);
    const initUnit = convertHandler.getUnit(param);

    if (initNum == "invalid number" && initUnit == "invalid unit") {
      response = "invalid number and unit";
      res.send(response);
    } else if (initNum == "invalid number") {
      response = "invalid number";
      res.send(response);
    } else if (initUnit == "invalid unit") {
      response = "invalid unit";
      res.send(response);
    } else {
      response = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: convertHandler.convert(initNum, initUnit),
        returnUnit: convertHandler.getReturnUnit(initUnit),
        string: convertHandler.getString(
          initNum,
          initUnit,
          convertHandler.convert(initNum, initUnit),
          convertHandler.getReturnUnit(initUnit)
        ),
      };
      res.json(response);
    }

  });
};
