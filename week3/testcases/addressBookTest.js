const assert = require('chai').assert;
const inventoryResult = require('../OOprogram_JS/addressBook');
var fs = require("fs");
var data = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/addressData.json");
var resJ=JSON.parse(data);
describe('BDD Testcase for Address Book', function () {

    it("Check File empty or not", function () {
      
        assert.isTrue(isNaN(resJ));
    });

    it("FirstName should be string only", function () {
      
        for(let i=0;i<resJ.person.length;i++)
        {
            var arr=resJ.person[i].firstName;
            assert.typeOf(arr,'String');
        }
    });


    it("LastName should be string only", function () {
      
        for(let i=0;i<resJ.person.length;i++)
        {
            var arr=resJ.person[i].lastName;
            assert.typeOf(arr,'String');
        }
    });
   
    
    it("Zip value should be number only", function () {
      
        for(let i=0;i<resJ.person.length;i++)
        {
            var arr=resJ.person[i].zip;
            assert.typeOf(arr,'number');
        }
    });
}); 
