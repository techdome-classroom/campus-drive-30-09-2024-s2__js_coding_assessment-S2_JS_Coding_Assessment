/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] == '{') {
            stack.push('}');
        } else if (s[idx] == '[') {
            stack.push(']');
        } else if (s[idx] == '(') {
            stack.push(')');
        }
        else if (stack.pop() !== s[idx]) {
            return false;
        }
    }
    return !stack.length;
};

console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("([)]"));      // Output: false
console.log(isValid("{[]}"));  

module.exports = { isValid };


