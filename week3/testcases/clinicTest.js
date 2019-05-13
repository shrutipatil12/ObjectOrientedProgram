const assert = require('chai').assert;
const clinicResult = require('../OOprogram_JS/Clinic');
var fs = require("fs");

var data = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/clinicData.json");
var resJ = JSON.parse(data);
describe('BDD Testcase for Clinic', function () {


    it("Check File empty or not", function () {

        assert.isTrue(isNaN(data));
    });

    it("Name should be string only", function () {

        for (let i = 0; i < resJ.Doctors.length; i++) {
            var arr = resJ.Doctors[i].Name;
            assert.typeOf(arr, 'String');
        }
    });

    it("ID value should be number only", function () {

        for (let i = 0; i < resJ.Doctors.length; i++) {
            var arr = resJ.Doctors[i].ID;
            assert.typeOf(arr, 'number');
        }
    });
}); 
