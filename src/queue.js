import LinkedList from './linkedList';

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * Read the element at the front of the queue without removing it.
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * Add a new element to the end of the queue (the tail of the linked list).
     * @param {*} value
     */
    enqueue(value) {
        this.linkedList.append(value);
    }

    /**
     * Remove the element at the front of the queue (the head of the linked list).
     * If the queue is empty, return null.
     * @return {*}
     */
    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }
}
