module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][0]) {
                if (str[i] !== bracketsConfig[j][1]) {
                    stack.push(str[i]);
                    count++;
                } else if (str[i] === bracketsConfig[j][0]) {
                    if(stack[stack.length - 1] !== str[i]) {
                        stack.push(str[i]);
                        count++;
                    }
                }
            }
        }
        if(count === 0) { 
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (str[i] === bracketsConfig[j][1]) {
                    if (stack[stack.length - 1] === bracketsConfig[j][0]) {
                        stack.pop();
                    }
                    else
                        return false;
                    count++;
                }
            }
        }
        if(count === 0)
            return false;
    }
    if (stack.length !== 0)
        return false;
    else
        return true;
}
