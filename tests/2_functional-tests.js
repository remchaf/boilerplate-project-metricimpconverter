const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    
    test("1 - 10L: GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get("/api/convert")
            .query({ input: "10L" })
            .end(function(err, res) {
                console.log(res.data)
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
                done();
            })
    })

    test("2 - 32g: GET request to /api/convert", function(done) {
        chai
        .request(server)
        .get("/api/convert")
        .query({ input: "32g" })
        .end(function(err, res) {
            assert.equal(res.status, 200, "Response status on success should be equal to 200");
            assert.equal(res.text, "invalid unit");
            done();
        })
    })
    
    test("3 - 3/7.2/4kg: GET request to /api/convert", function(done) {
        chai
        .request(server)
        .get("/api/convert")
        .query({ input: "3/7.2/4kg" })
        .end(function(err, res) {
            assert.equal(res.status, 200, "Response status on success should be equal to 200");
            assert.equal(res.text, "invalid number");
            done();
        })
    })
    
    test("4 - 3/7.2/4kilomegagram:GET request to /api/convert", function(done) {
        chai
        .request(server)
        .get("/api/convert")
        .query({input: "3/7.2/4kilomegagram"})
        .end(function(err, res) {
            assert.equal(res.status, 200, "Response status on success should be equal to 200");
            assert.equal(res.text, "invalid number and unit");
            done();
        })
    })
    
    test("5 - kg: GET request to /api/convert", function(done) {
        chai
        .request(server)
        .get("/api/convert")
        .query({ input: "kg" })
        .end(function(err, res) {
            assert.equal(res.status, 200, "Response status on success should be equal to 200");
            assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds");
            done();
        })
    })

});
