
/**
 * Capitalizes the first character of a given string
 * @method capitalize
 * @param  {String} str
 * @returns {String}
 */
export function capitalize(str) {
  return str.replace(/^\w/, (firstChar) => firstChar.toUpperCase())
}

/**
 * Simulates rolling an n-sided die
 * @method roll
 * @param  {Number} n Number of sides on the die
 * @param  {Number} offset gets added to the result of the roll
 * @param  {Boolean} print Whether or not to report the result
 * @returns {Number} Returns a number between 1 and n
 */
export function roll(n, offset = 0, print = false) {
  let res = Math.floor(Math.random() * n + 1) + offset;
  if (print) {
    let report = `\td${n}`;
    report += offset ? `+${offset}` : '';
    report += ` Result: ${res}`;

    console.log(report);
  }

  return res;
}


export function getResultFromTable(roll, potency, table) {
  const keys = Object.keys(table);

  const result = keys.find((key) => {
    if (table[key][potency]) {
      const [min, max] = table[key][potency]
      return roll >= min && roll <= max;
    }

    return false;
  });

  return table[result];
}
