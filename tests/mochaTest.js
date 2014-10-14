var playerModel = require('../rapidshot.js');
var assert = require('chai').assert;
  
describe('ammo', function () {
  describe('ammo tests', function () {
    var player;
    
    beforeEach(function () {
      player = playerModel.create();
    });

    it('initial ammo 30', function () {
      assert.equal(player.getAmmo(), 30);
    });
    it('should set ammo 3', function () {
      player.setAmmo(3);
      assert.equal(player.getAmmo(), 3);
    });
    it('should substract ammo -1', function () {
      player.shoot();
      assert.equal(player.getAmmo(), 29);
    });
    it('should return false', function () {
      player.setAmmo(0);
      player.shoot();
      assert.equal(player.getAmmo(), false);
    });
    it('should return to the initial ammo value', function () {
      player.reload();
      assert.equal(player.getAmmo(), 30);
    });
  });
});

