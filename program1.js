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
   
    const stack = [];

    
    for (let char of s) {
        
        if (bracketMap[char]) {
            
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


;

module.exports = { isValid };


