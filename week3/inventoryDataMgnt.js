/******************************************************************************
 *  Execution       :cmd> node inventory.js                     
 *  purpose         :To create inventory object from JSON and to calculate the value for every inventory.
 *  @description    :To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheat with properties name,price per kg.
 *  @file           :inventory.js
 *  @overview       :To calculate the total cost of each object in inventory for given quantity.
 *  @author         :Shruti
 *  @version        :1.0
 *  @since          :09-05-2019
 ******************************************************************************/

var util = require("../Utility/OOPrograms_Util");
var fs = require("fs");
var flag = true;
var read = require('readline-sync')
function inventMgnt() {
    try {
        //take input from user
        var inputWeight;
        inputWeight = read.question("Enter the total weight");
        //read the JSON file
        var data = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/inventoryData.json");
        //convert JSON file into object
        var object = JSON.parse(data);
        console.log(object)
        console.log(typeof (object));
    }
    catch (err) {
        //handle exception
        console.log("file not found ");
        flag = false;
    }

    function inventoryData() {
        //calling the inventory function
        if (flag)
            util.inventory(object, inputWeight);

    }
    //callback to the function
    inventoryData();

    var arr = [];
    arr.push(inputWeight);
    arr.push(data);
    return arr;
}
module.exports = inventMgnt();