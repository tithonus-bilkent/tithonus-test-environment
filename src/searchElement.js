/**
 * Linear search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number[]}
 */
function searchElement(sortedArray, seekElement) {
    const foundIndices = [];

    sortedArray.forEach((element, index) => {
        if (element === seekElement) {
            foundIndices.push(index);
        }
    });

    return foundIndices;
}
