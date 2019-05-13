/******************************************************************************
 *  Execution       : cmd> node stock.js
 *  purpose         : Program to read in Stock Names, Number of Share, Share Price. 
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @description    : Calculate the value of each stock and the total value.
 *  @file           : stock.js
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 27-03-2019
 ******************************************************************************/
var utility = require("../Utility/OOPrograms_Util")
//var read=require('readline-sync');
var file = require("fs")
var flag = true;
function stockFun() {
    try {
        //read JSON file
        var filedata = file.readFileSync("/home/abc/mochatest/OOprogram_JS/stockData.json")
        //convert JSON file into object
        var object = JSON.parse(filedata);
    }
    catch (err) {
        //handle exception
        console.log("File not Found" + err);
        flag = false;
    }

    function stock() {
        if (flag)
            utility.stockReport(object);

    }
    //call function
    stock();
    return object;
}
module.exports = stockFun();