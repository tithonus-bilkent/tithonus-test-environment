/**
 * Quick sort implementation
 *
 * @param {number[]} originalArray
 */
function sortArray(originalArray) {
    const array = [...originalArray];
    if (array.length <= 1) {
        return array;
    }

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    const leftArray = [];
    const rightArray = [];
    while (array.length) {
        const currentElement = array.shift();

        if (currentElement === pivotElement) {
            centerArray.push(currentElement);
        } else if (currentElement < pivotElement) {
            leftArray.push(currentElement);
        } else {
            rightArray.push(currentElement);
        }
    }

    const leftArraySorted = sortArray(leftArray);
    const rightArraySorted = sortArray(rightArray);
    return leftArraySorted.concat(centerArray, rightArraySorted);
}
