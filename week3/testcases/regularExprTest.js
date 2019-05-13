const assert = require('chai').assert;
const exprResult = require("../OOprogram_JS/regularExpression");

describe('BDD Testcase for regular expression ', function () {
  it('Name should be in String ', function () {

    assert.typeOf(exprResult[0], 'String');

  });

  it('string should have 3 char', function () {

    assert.isTrue(exprResult[0].length >= 3)
  });

  it('FullName should be in String', function () {

    assert.typeOf(exprResult[1], 'String');
  });


  it('Phone number should be in number', function () {

    assert.typeOf(exprResult[2], 'number');
  });
});

