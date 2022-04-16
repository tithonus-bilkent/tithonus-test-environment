class Queue {
    constructor() {
        this.elements = [];
        this.start = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.start === this.elements.length;
    }

    /**
     * Read the element at the front of the queue without removing it.
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.elements[this.start];
    }

    /**
     * Add a new element to the end of the queue (the tail of the linked list).
     * @param {*} value
     */
    enqueue(value) {
        this.elements.push(value);
    }

    /**
     * Remove the element at the front of the queue (the head of the linked list).
     * If the queue is empty, return null.
     * @return {*}
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        this.start++;
        return this.elements[this.start - 1];
    }
}
