const assert = require('chai').assert;
const inventoryResult = require('../OOprogram_JS/inventoryDataMgnt');
var fs = require("fs");
var data = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/inventoryData.json");
var resJ = JSON.parse(data);
describe('BDD Testcase for inventory management', function () {

    it('Weight should be greater than zero', function () {
        assert.isTrue(inventoryResult[0] > 0);
    });


    it("Check File empty or not", function () {

        assert.isTrue(isNaN(data));
    });

    it("Name should be string only", function () {

        for (let i = 0; i < resJ.Rice.length; i++) {
            var arr = resJ.Rice[i].name;

        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < resJ.Rice.length; i++) {
            var arr = resJ.Rice[i].price;
            assert.typeOf(arr, 'number');
        }
    });
}); 
