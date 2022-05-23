"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  app.route("/api/convert").get((req, res) => {
    const param = req.query.input;
    let convertHandler = new ConvertHandler();
    let response;

    if (
      convertHandler.getNum(param) == "invalid number" &&
      convertHandler.getUnit(param) == "invalid unit"
    ) {
      response = "invalid number and unit";
    } else if (typeof convertHandler.getNum(param) == "string") {
      response = "invalid number";
    } else if (convertHandler.getUnit(param) == "invalid unit") {
      response = "invalid unit";
    } else {
      response = {
        initNum: convertHandler.getNum(param),
        initUnit: convertHandler.getUnit(param),
        returnNum: convertHandler.convert(convertHandler.getNum(param)),
        returnUnit: convertHandler.getReturnUnit(convertHandler.getUnit(param)),
        string: convertHandler.getString(
          convertHandler.getNum(param),
          convertHandler.getUnit(param),
          convertHandler.convert(convertHandler.getNum(param)),
          convertHandler.getReturnUnit(convertHandler.getUnit(param))
        ),
      };
    }

    res.json(response);
  });
};
