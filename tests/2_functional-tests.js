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
            .end(function(err, res) {
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal();
            })
    })

    test("2 - 32g: GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get("/api/convert")
            .end(function(err, res) {
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal();
            })
    })

    test("3 - 3/7.2/4kg: GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get("/api/convert")
            .end(function(err, res) {
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal();
            })
    })

    test("4 - 3/7.2/4kilomegagram:GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get("/api/convert")
            .end(function(err, res) {
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal();
            })
    })

    test("5 - kg: GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get("/api/convert")
            .end(function(err, res) {
                assert.equal(res.status, 200, "Response status on success should be equal to 200");
                assert.equal();
            })
    })


});
