/******************************************************************************
 *  Execution       : cmd> node addressBook.js
 *  purpose         : A program that can be used to maintain an address book. 
 *  @description    : An address book holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                      phone number.
 *  @file           : addressBook.js
 *  @author         : Shruti
 *  @version        : 1.0
 *  @since          : 10-05-2019
 ******************************************************************************/



var util = require('../Utility/OOPrograms_Util');
var fs = require('fs');
var read = require('readline-sync');
function addressB(){
try {
    //read json file and create its object
    var file = fs.readFileSync("/home/abc/mochatest/OOprogram_JS/addressData.json", "utf8");
    var object = JSON.parse(file);
    //calling the function 
    util.AddressBook(object, read);
}
//execute when error occured
catch (err) {
    console.log("ERROR : " + err);
}
return object;
}
module.exports=addressB();

