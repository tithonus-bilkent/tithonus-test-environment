/**
 * Merge sort implementation
 *
 * @param {number[]} originalArray
 */
function sortArray(originalArray) {
    if (originalArray.length <= 1) {
        return originalArray;
    }

    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    const leftArraySorted = sortArray(leftArray);
    const rightArraySorted = sortArray(rightArray);
    return mergeSortedArrays(leftArraySorted, rightArraySorted);
}

/**
 * Merge two sorted arrays.
 *
 * @param {number[]} leftArray
 * @param {number[]} rightArray
 */
function mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        let minElement = null;

        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            minElement = leftArray[leftIndex];
            leftIndex += 1;
        } else {
            minElement = rightArray[rightIndex];
            rightIndex += 1;
        }

        sortedArray.push(minElement);
    }

    return sortedArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
}
