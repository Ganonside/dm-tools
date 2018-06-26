var readline = require('readline-sync');
var typeThresholds = require('./itemTypes.json');

var potencyEnum = {
  Minor: 'minor',
  Medium: 'medium',
  Major: 'major'
};
Object.freeze(potencyEnum); 

var typeEnum = {
  Armor: 'armor',
  Weapon: 'weapon',
  Potion: 'potion',
  Ring: 'ring',
  Rod: 'rod',
  Scroll: 'scroll',
  Staff: 'staff',
  Wand: 'wand',
  Wondrous: 'wondrous'
};
Object.freeze(typeEnum);

// What kind of item?
function getItemType(potency) {
  var type;

  switch (potency) {
    case potencyEnum.Minor:
    case potencyEnum.Medium:
    case potencyEnum.Major:
  }
}

// Utility
function capitalize(str) {
  return str.replace(/^\w/, function(firstChar) {
    return firstChar.toUpperCase();
  });
}

function roll(sides) {
  var res = Math.floor(Math.random() * (sides) + 1);
  return res;
}

// Go
var repeat = false;

do {
  var rl = readline;
  var potency;
  var numItems;
  var items = [];

  // Select Potency
  do {
    var potencyIn = rl.question('Minor (0), Medium (1), or Major (2)? ');

    if (/^[Mm](?:inor|edium|ajor)$/.test(potencyIn)) {
      potency = potencyEnum[capitalize(potencyIn)]
    } else if (/^[012]$/.test(potencyIn)) {
      switch (parseInt(potencyIn)) {
        case 0:
          potency = potencyEnum.Minor;
          break;
        case 1:
          potency = potencyEnum.Medium;
          break;
        case 2:
          potency = potencyEnum.Major;
          break;
      }
    }
  } while (!potency);

  // How many items
  do {
    var numItemsIn = rl.question('How many items (d#)? ');

    var sidesRe = /^d?(\d+)$/;
    if (sidesRe.test(numItemsIn)) {
      sides = sidesRe.exec(numItemsIn)[1];
      numItems = roll(sides)
    }
  } while (numItems === undefined)

  // What types of items
  var itemTypes = [];
  var count = 0;
  while (count < numItems) {
    var typeRoll = roll(100);

    var typeKeys = Object.keys(typeThresholds);
    var iType = 0
    while (iType < typeKeys.length) {
      var type = typeKeys[iType]
      var threshold = typeThresholds[type];

      if (threshold[potency] && typeRoll >= threshold[potency][0] && typeRoll <= threshold[potency][1]) {
        itemTypes.push(type);
        break;
      }

      ++iType;
    }


    ++count;
  }

  // Item Details

} while (repeat);
