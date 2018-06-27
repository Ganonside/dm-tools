import { capitalize, roll, getResultFromTable } from '../assets/generalUtils.js';
import * as assets from '../assets/assets.js';

const rl = require('readline-sync');

const {
  itemFamilyThresholds: typeThresholds,
  armorThresholds,
  potionThresholds,
  ringThresholds,
  rodThresholds,
  scrollThresholds,
  staffThresholds,
  wandThresholds,
  weaponThresholds,
  wondrousThresholds
} = assets;

const ePotency = {
  Minor: 'minor',
  Medium: 'medium',
  Major: 'major'
};
Object.freeze(ePotency);

const eFamily = {
  Armor: 'armor & shields',
  Weapon: 'weapon',
  Potion: 'potion',
  Ring: 'ring',
  Rod: 'rod',
  Scroll: 'scroll',
  Staff: 'staff',
  Wand: 'wand',
  Wondrous: 'wondrous'
};
Object.freeze(eFamily);

// What kind of item?
function getItemType(potency) {
  var type;

  switch (potency) {
    case ePotency.Minor:
    case ePotency.Medium:
    case ePotency.Major:
  }
}

// Go
let repeat = false;
let items = [];

do {
  let potency;
  let numItems;

  /******************
   * Select Potency *
   ******************/
  do {
    const potencyIn = rl.question('> Minor (0), Medium (1), or Major (2)? ');

    if (/^[Mm](?:inor|edium|ajor)$/.test(potencyIn)) {
      potency = ePotency[capitalize(potencyIn)]
    } else if (/^[012]$/.test(potencyIn)) {
      switch (parseInt(potencyIn)) {
        case 0: potency = ePotency.Minor; break;
        case 1: potency = ePotency.Medium; break;
        case 2: potency = ePotency.Major; break;
      }
    }
  } while (!potency);

  /******************
   * How many items *
   ******************/
  do {
    const numItemsIn = rl.question('> How many items (d#)? ');

    let sidesRe = /^d?(\d+)$/;
    if (sidesRe.test(numItemsIn)) {
      const sides = sidesRe.exec(numItemsIn)[1];
      numItems = roll(sides, 0, true)
    }
  } while (numItems === undefined)

  /***********************************
   * Determine the type of each item *
   ***********************************/
  let itemTypes = [];
  let itemCount = 0;
  while (itemCount < numItems) {
    const typeRoll = roll(100);

    const typeKeys = Object.keys(typeThresholds);
    let iType = 0
    while (iType < typeKeys.length) {
      const type = typeKeys[iType]
      const threshold = typeThresholds[type];

      if (threshold[potency] && typeRoll >= threshold[potency][0] && typeRoll <= threshold[potency][1]) {
        itemTypes.push(type);
        break;
      }

      ++iType;
    }


    ++itemCount;
  }

  items = items.concat(itemTypes);
  console.log(items);

  /**********************************
   * Generate details for each item *
   **********************************/
  let itemDetails = [];
  let detailCount = 0;
  while (detailCount < numItems) {
    const type = itemTypes[detailCount];
    let details = {};
    let reroll;
    switch (type) {
      case eFamily.Armor:
        do {
          const res = getResultFromTable(roll(100, 0, true), potency, armorThresholds)
          reroll = !!res.reroll
          details = Object.assign(res, details);
        } while (reroll);
        details.type = eFamily.Armor;
        break;
      case eFamily.Weapon:

        break;
      case eFamily.Potion:

        break;
      case eFamily.Ring:

        break;
      case eFamily.Rod:

        break;
      case eFamily.Scroll:

        break;
      case eFamily.Staff:

        break;
      case eFamily.Wand:

        break;
      case eFamily.Wondrous:

        break;
    }



    ++detailCount;
  }

  /***********
   * Repeat? *
   ***********/
  const repeatIn = rl.question('> Generate more items [y/N]? ');
  repeat = /^\s*[Yy]\s*$/.test(repeatIn);

} while (repeat);

console.log(`\n${items}`);
