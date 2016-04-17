var assert = require('chai').assert
var e = require('./index.js')

describe('String Evaluation', function() {
  describe('Constants', function() {
    it('True', function() {
      assert.equal(e('true'), true)
    })
    it('False', function() {
      assert.equal(e('false'), false)
    })
  })
  describe('Logic', function() {
    it('! NOT', function() {
      assert.equal(e('!true'), false)
      assert.equal(e('!!true'), true)
    })
    it('&& AND', function() {
      assert.equal(e('true && true'), true && true)
      assert.equal(e('true && false'), true && false)
      assert.equal(e('false && false'), false && false)
    })
    it('|| OR', function() {
      assert.equal(e('true || true'), true || true)
      assert.equal(e('true || false'), true || false)
      assert.equal(e('false || false'), false || false)
    })
  })
  describe('Equivelency', function() {
    it('=== Strict Equal', function() {
      assert.equal(e('2 === 4'), 2 === 4)
      assert.equal(e('4 === 2'), 4 === 2)
      assert.equal(e('42 === 42'), 42 === 42)
    })
    it('!== Strict Not Equal', function() {
      assert.equal(e('2 !== 4'), 2 !== 4)
      assert.equal(e('4 !== 2'), 4 !== 2)
      assert.equal(e('42 !== 42'), 42 !== 42)
    })
    it('<= Less Than or Equal', function() {
      assert.equal(e('2 <= 4'), 2 <= 4)
      assert.equal(e('4 <= 2'), 4 <= 2)
      assert.equal(e('42 <= 42'), 42 <= 42)
    })
    it('>= Greater Than or Equal', function() {
      assert.equal(e('2 >= 4'), 2 >= 4)
      assert.equal(e('4 >= 2'), 4 >= 2)
      assert.equal(e('42 >= 42'), 42 >= 42)
    })
    it('< Less Than', function() {
      assert.equal(e('2 < 4'), 2 < 4)
      assert.equal(e('4 < 2'), 4 < 2)
      assert.equal(e('42 < 42'), 42 < 42)
    })
    it('> Greater Than', function() {
      assert.equal(e('2 > 4'), 2 > 4)
      assert.equal(e('4 > 2'), 4 > 2)
      assert.equal(e('42 > 42'), 42 > 42)
    })
    it('== Equal', function() {
      assert.equal(e('2 == 4'), 2 == 4)
      assert.equal(e('4 == 2'), 4 == 2)
      assert.equal(e('42 == 42'), 42 == 42)
    })
    it('!= Not Equal', function() {
      assert.equal(e('2 != 4'), 2 != 4)
      assert.equal(e('4 != 2'), 4 != 2)
      assert.equal(e('42 != 42'), 42 != 42)
    })
  })
  describe('Arithmetic', function() {
    it('% Remainder', function() {
      assert.equal(e('2 % 4'), 2 % 4)
      assert.equal(e('4 % 2'), 4 % 2)
      assert.equal(e('42 % 42'), 42 % 42)
    })
    it('* Multiply', function() {
      assert.equal(e('2 * 4'), 2 * 4)
      assert.equal(e('4 * 2'), 4 * 2)
      assert.equal(e('42 * 42'), 42 * 42)
    })
    it('/ Divide', function() {
      assert.equal(e('2 / 4'), 2 / 4)
      assert.equal(e('4 / 2'), 4 / 2)
      assert.equal(e('42 / 42'), 42 / 42)
    })
    it('+ Add', function() {
      assert.equal(e('2 + 4'), 2 + 4)
      assert.equal(e('4 + 2'), 4 + 2)
      assert.equal(e('42 + 42'), 42 + 42)
    })
    it('- Subtract', function() {
      assert.equal(e('2 - 4'), 2 - 4)
      assert.equal(e('4 - 2'), 4 - 2)
      assert.equal(e('42 - 42'), 42 - 42)
    })
  })
  describe('Grouping', function() {
    it('() Brackets', function() {
      assert.equal(e('(42 + 2) / 4'), (42 + 2) / 4)
      assert.equal(e('42 + 2 / 4'), (42 + 2 / 4))
      assert.notEqual(e('42 / 2 - 4'), 42 / (2 - 4))
      assert.equal(e('true  && (true || false)'), true  && (true || false))
      assert.equal(e('true  || (true && false)'), true  || (true && false))
      assert.equal(e('false && (true && false)'), false && (true && false))
      assert.equal(e('true  && (true && false)'), true  && (true && false))
    })
  })

})
