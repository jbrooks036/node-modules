function Building () {
  this.isBurned = false;
}

Building.prototype.burn = function () {
  console.log('🔆');
  this.isBurned = true;
};

// exporting singleton new object (always will be same object)
module.exports = new Building();
