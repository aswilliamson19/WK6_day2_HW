const Park = function (name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.deleteDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.splice(dinosaur);
};

Park.prototype.largestVisitorNumbers = function () {

};

module.exports = Park
