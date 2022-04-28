/**
 * Insertion sort implementation
 *
 * @param {number[]} originalArray
 */
function sortArray(originalArray) {
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
        let currentIndex = i;

        while (array[currentIndex - 1] !== undefined && array[currentIndex] < array[currentIndex - 1]) {
            const temp = array[currentIndex];
            array[currentIndex] = array[currentIndex - 1];
            array[currentIndex - 1] = temp;

            currentIndex -= 1;
        }
    }

    return array;
}

