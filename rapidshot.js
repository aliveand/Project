function Player(){
  var player={
  hp: 3,
  ammo: 30
  };

this.getAmmo = function(){
  return player['ammo'];
  };
 this.setAmmo = function(number){
   player['ammo'] = number;
 };
 this.shoot = function(){
   if (player['ammo'] <= 0){
     return false;
   }
   player['ammo']-- ;
 };
 this.reload = function(){
   player['ammo'] = 30;
 };
}
 
function create() {
    return new Player();
 }

module.exports = {
  create: create
};



















