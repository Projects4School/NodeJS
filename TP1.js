/**
 *  Sum 2 numbers
 * @param {Number} numA 
 * @param {Number} numB
 * @return {Number} Sum of numA and numB
 */
function Sum(numA, numB) {
    return numA + numB;
}

/**
 * Find max number of array of numbers
 * @param {Number[]} array Array of numbers
 * @returns {Number} Max number of array
 */
function Max(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if(number > max) max = number;
    }
    return max;
}

/**
 * Remove vowels from a string
 * @param {String} stringInput String input
 * @returns {String} String output without vowels
 */
function RemoveVowels(stringInput) {
    // Replace all vowels in the string using regexp pattern
    return stringInput.replace(/[AEIOUYaeiouy]/g, '');
}

/**
 * Sort array by ASC
 * @param {any[]} array Input array
 * @returns {any[]} Array sorted by ASC
 */
function SortAsc(array) {
    // Loop first time the array
    for (let i = 0; i < array.length; i++) {
        // Loop second time the array for compare values one by one
        for (let j = i; j < array.length; j++) {   
            // Compare values one by one and switch the smallest value with the biggest value
            if(array[j] < array[i]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

/**
 * Sort array by DESC
 * @param {any[]} array Input array
 * @returns {any[]} Array sorted by DESC
 */
function SortDesc(array) {
    // Loop first time the array
    for (let i = 0; i < array.length; i++) {
        // Loop second time the array for compare values one by one
        for (let j = i; j < array.length; j++) {   
            // Compare values one by one and switch the biggest value with the smallest value
            if(array[j] > array[i]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

/**
 * Get values in array of object by property
 * @param {object[]} array Input array of objects
 * @param {String} property Name of property to get values in array
 * @returns {any[]} Output array with values
 */
function GetValuesByProperty(array, property) {
    const arrayOutput = [];
    // Loop array 
    for (let i = 0; i < array.length; i++) {
        const elem = array[i];
        // Get value of property by the name, check if not undefined and push this in output array
        const prop = elem[property];
        if(prop) arrayOutput.push(prop);
    }
    return arrayOutput;
}