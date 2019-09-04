const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 45);
    dinosaur3 = new Dinosaur('Triceratops', 'herbivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'carnivore', 25);
    dinosaur5 = new Dinosaur('Dilophosaurus', 'carnivore', 48);
    park = new Park('Jurassic Park', 25);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function () {
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur5);
    const expected = [dinosaur5];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur3);
    park.deleteDinosaur(0);
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {


  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
