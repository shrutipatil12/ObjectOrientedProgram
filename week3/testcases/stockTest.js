const assert = require('chai').assert;
const stockResult = require('../OOprogram_JS/stock');
var fs = require("fs");
var data = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/stockData.json");
var resJ = JSON.parse(data);
describe('BDD Testcase for inventory management', function () {
    it("Check File empty or not", function () {
         assert.isTrue(isNaN(data));
    });

    it("Name should be string only", function () {

        for (let i = 0; i < resJ.Stock.length; i++) {
            var arr = resJ.Stock[i].stock_name;
            assert.typeOf(arr, 'String');
        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < resJ.Stock.length; i++) {
            var arr = resJ.Stock[i].share_price;
            assert.typeOf(arr, 'number');
        }
    });
}); 
