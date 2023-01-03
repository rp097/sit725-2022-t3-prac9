let express = require("express"); 
var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function(){
    var url = 'http://localhost:8080/addTwoNumbers/12/7';
    
    //Test case 1
    it("returns status 200 to check if the API works", function(done){
        request(url,function(error,response){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    //Test case 2
    it("returns statuscode in the body to check if returned value is equal to 200", function(done){
        request(url,function(error,response,body){
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });

    //Test case 3
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });

    //Test case 4
    it("returns the result equal to 8", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(19);
          done()
        });
    });

    //Test case 5
    it("returns the result not equal to 15", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.result).to.not.equal(15);
        done()
      });
    });
});

describe("Multiply Two Numbers", function(){
    var url = 'http://localhost:8080/multiplyTwoNumbers/5/6';

    //Test case 1
    it("returns status 200 to check if the API works", function(done){
        request(url,function(error,response){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    //Test case 2
    it("returns the result equal to 30", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.equal(30);
            done();
          });
      });

      //Test case 3
      it("returns the result not equal to 25", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(25);
            done();
          });
      });
});