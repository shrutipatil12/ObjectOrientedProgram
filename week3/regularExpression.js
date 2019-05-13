/******************************************************************************
 *  Execution       :cmd> node regularExpression.js 
 *  Purpose         :To replace Name,Username,Mobile number with given input from user.
 *  @description    :To Hello <<name>>,We have your fullname as <<fullname>> in our system.
 *                   your contact number is <<91xxxxxxxxx>>.please,let us know in case of any clarification,
 *                   Thank You BridgeLabz <<xx-xx-xxxx>>.Use regex to replace name, fullname,mobile no,and date with proper value.
 *  @file           :regularExpression.js
 *  @overview       :To replace name ,fullname, mobile number using regex and to update current date. 
 *  @author         :Shruti
 *  @version        :1.0
 *  @since          :10/05/2019
 ******************************************************************************/
var util = require("../Utility/OOPrograms_Util");
var read = require("readline-sync");

function regExpr() {
    try {
        //taking input from user
        var name = read.question("Enter your name: ");
        //check the condition
        if (/[a-zA-Z]+$/g.test(name))
            //If it not matches with the pattern throw message
            throw "Enter a string value";

        var fullname = read.question("Enter your fullname: ");
        if (!/[a-zA-Z]+$/g.test(fullname))
            //if user input not matches with the pattern throw message
            throw "Enter a string value";

        var mobilenumber = read.question("Enter valid mobile number: ");
        //check the condition for mobile number
        if ((!/^\d{10}$/g.test(mobilenumber)))
            //if mobile number not matches with the pattern throw message
            throw "Enter ten digit number";
        //set date
        var ds = new Date();
        dt = ds.getDate() + "/" + ds.getMonth() + "/" + ds.getFullYear();

        //call regex function from util
        util.regex(name, fullname, mobilenumber, dt);
    }
    catch (err) {
        //throw exception
        console.log('ERROR : ', err);
        //regExpr();
    }
    var arr = [];
    arr.push(name);
    arr.push(fullname);
    arr.push(mobilenumber);
    return arr;
}

module.exports = regExpr();

