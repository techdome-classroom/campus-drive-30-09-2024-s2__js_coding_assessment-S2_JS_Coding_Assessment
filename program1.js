/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    // Stack to hold the opening brackets
    const stack = [];

    // Iterate over each character in the string
    for (let char of s) {
        // If char is a closing bracket
        if (bracketMap[char]) {
            // Pop the top of the stack if not empty, otherwise assign a dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if it matches the corresponding opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets are matched correctly
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("([)]"));      // Output: false
console.log(isValid("{[]}")); 
};

module.exports = { isValid };


