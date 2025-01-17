function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0]

    let counter
    for (let i = 0; i < strs[0].length + 1; i++) {
        counter = i;

        const longestPrefix = strs.every((string) => {
            return string.startsWith(strs[0].substring(0, counter))
        })

        if(!longestPrefix) {
            return strs[0].substring(0, counter - 1)
        }

        if(longestPrefix && counter === strs[0].length) {
            return strs[0]
        }
    }
};

function longestCommonPrefixOptimized(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];
    
    // Sort array to get shortest and potentially most different strings at the ends
    strs.sort();
    
    // We only need to compare first and last string after sorting
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    
    let i = 0;
    while (i < firstStr.length && firstStr[i] === lastStr[i]) {
        i++;
    }
    
    return firstStr.slice(0, i);
}

module.exports = { longestCommonPrefix, longestCommonPrefixOptimized }