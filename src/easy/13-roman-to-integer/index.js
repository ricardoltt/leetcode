function romanToInteger(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const array = s.split('')

    let sum = 0

    for (let i = array.length - 1; i >= 0; i--) {
        const number = map[array[i]]
        const nextNumber = map[array[i + 1]]

        if(nextNumber > number) {
            sum = sum - map[array[i]]
        } else {
            sum = sum + map[array[i]]
        }
    }

    return sum
};

function romanToIntegerOptimized(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]] || 0;
        
        if (current < next) {
            sum -= current;
        } else {
            sum += current;
        }
    }
    
    return sum;
}

module.exports = { romanToInteger, romanToIntegerOptimized }

