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
           
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
           
            stack.push(char);
        }
    }

    
    return stack.length === 0;
}


};

module.exports = { isValid };


