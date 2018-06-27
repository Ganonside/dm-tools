

class MagicItem {
  constructor(type, name, value) {
    this.type = type;
    this.name = name;
    this.value = value;
  }

  toString() {
    return name;
  }
}

class Ability {
  constructor(effect, bonus, charges, frequency) {
    this.effect = effect;
    this.bonus = bonus;
    this.charges = charges;
  }

  toString() {
    if (frequency)
    return `${effect}`
  }
}

// Potion, Rod, Scroll, Staff, Wand
class ConsumableMagicItem extends MagicItem {
  constructor(type, name, value, effect, charges = 1) {
    super(type, name, value);

    this.effect = effect;
    this.charges = charges;
  }
}

// Armor, Weapon
class CombatMagicItem extends MagicItem {
  constructor(type, name, value, bonus, abilities = []) {
    super(type, name, value);

    this.bonus = bonus;
    this.abilities = abilities;
  }

  calculateEffectiveBonus(bonus, abilities) {
    let abilityBonuses = abilities ? abilities.fold((a) => a.bonus || 0) : 0;
    return bonus + abilityBonuses;
  }

  applyBonus(bonus) {
    this.bonus += bonus;
    const effectiveBonus = calculateEffectiveBonus(this.bonus, this.abilities);
    if (effectiveBonus > 10) {
      this.bonus -= effectiveBonus - 10;
    }
  }

  applyAbility(ability, reroll) {
    const effectiveBonus = calculateEffectiveBonus(this.bonus, this.abilities.concat(ability));
    if (effectiveBonus > 10) {
      reroll();
    } else {
      this.abilities = this.abilities.concat(ability);
    }
  }

  toString() {
    let str = `+${this.bonus} ${super.toString()}`
    for (let i = 0; i < this.abilities.length; ++i) {
      if (i === 0) {
        str += ` of ${ability.effect}`;
      } else {
        str += `, ${ability.effect}`;
      }

      if (ability.charges) {
        str += ` (x${ability.charges})`
      }
    }
    return str;
  }
}

// Ring, Wondrous
class WearableMagicItem extends MagicItem {
  constructor(type, name, value, slot, abilities = []) {
    super(type, name, value);

    this.slot = slot;
    this.abilities = abilities;
  }
}
