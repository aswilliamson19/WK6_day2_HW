const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.guestsAttracted = function (a, b) {
    for (dinosaur of dinosaurs) {
      if (dinosaur.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay) {
        console.log(dinosaur.species);
      }
    }
};

module.exports = Dinosaur;
