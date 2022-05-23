"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  app.route("/api/convert").get((req, res) => {
    const param = req.query.input;
    let convertHandler = new ConvertHandler(param);

    res.json({
      initNum: convertHandler.getNum(param),
      initUnit: convertHandler.getUnit(param),
      returNum: convertHandler.convert(param),
      returnUNit: convertHandler.getReturnUnit(param),
      string: convertHandler.getString(),
    });
  });
};
