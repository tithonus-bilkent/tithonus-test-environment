/**
 * Linear search implementation.
 *
 * @param {number[]} sortedArray
 * @param {number} seekElement
 * @return {number}
 */
function searchElement(sortedArray, seekElement) {
    for (let index = 0; index < sortedArray.length; index++){
        const element = sortedArray[index];
        if (element === seekElement) {
            return index;
        }
    }

    return -1;
}
