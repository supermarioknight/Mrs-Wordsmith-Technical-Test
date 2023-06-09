/**
 * Function to convert an Arabic number to a Roman numeral.
 *
 * @param num - The Arabic number to convert.
 * @returns The Roman numeral as a string.
 */
function arabicToRoman(num: number): string {
  // Validate the input
  if (num < 1 || num > 3999 || !Number.isInteger(num)) {
    throw new Error('Input must be an integer between 1 and 3999.');
  }

  // Define a map from Arabic numbers to Roman numerals.
  const arabicToRomanMap: { [key: number]: string } = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  const keys = Object.keys(arabicToRomanMap).map(Number).sort((a, b) => b - a);

  let roman = '';

  for (const key of keys) {
    // While the current number is greater than or equal to the current key...
    while (num >= key) {
      // Append the corresponding Roman numeral to the result string.
      roman += arabicToRomanMap[key];
      // Subtract the value of the current key from the number.
      num -= key;
    }
  }

  return roman;
}
