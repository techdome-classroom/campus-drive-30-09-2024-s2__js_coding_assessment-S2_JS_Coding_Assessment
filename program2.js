/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;

    // Iterate over the string `s`
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current character and the next character
        let currentVal = romanMap[s[i]];
        let nextVal = romanMap[s[i + 1]];

        // If the next value is greater than the current value, subtract current from total
        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            // Otherwise, add the current value to total
            total += currentVal;
        }
    }
    
    return total;
}

// Test cases
console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
;


module.exports={romanToInt}