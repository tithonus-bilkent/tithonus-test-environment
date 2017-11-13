/*******************************************************
 *  SkipList.java
 *  Created by Stephen Hall on 11/09/17.
 *  Copyright (c) 2017 Stephen Hall. All rights reserved.
 *  Skip List implementation in Java
 ********************************************************/

/**
 * Skip list class
 * @param <T> Generic type
 */
public class SkipList<T extends Comparable<T>> {
    private Node head;
    private int max;
    private int size;
    private static final double PROBABILITY = 0.5;

    /**
     * Node for Skip List class
     * @param <T> generic Type
     */
    public class Node {
        public T data;
        public List<Node> nodeList;

        /**
         * Node Constructor
         * @param data: data for the node to hold
         */
        public Node(T data) {
            this.data = data;
            nodeList = new ArrayList<Node>();
        }

        /**
         * Gets the level of the Node
         * @return int: level of the node
         */
        public int Level() {
            return nodeList.size()-1;
        }
    }

    /**
     * Skip List Constructor
     */
    public SkipList() {
        size = 0;
        max = 0;
        // a Node with value null marks the beginning
        head = new Node(null);
        // null marks the end
        head.nodeList.add(null);
    }

    // Adds data to the skiplist.
    // Returns false if already in skiplist, true otherwise.

    /**
     * Adds a node into the Skip List
     * @param data: data to add into the list
     * @return boolean: success|fail
     */
    public boolean Add(T data) {
        if(Contains(data))
            return false;

        size++;

        // random number from 0 to max+1 (inclusive)
        int level = 0;

        while (Math.random() < PROBABILITY)
            level++;

        while(level > max) {
            // should only happen once
            head.nodeList.add(null);
            max++;
        }

        Node node = new Node(data);
        Node current = head;

        do {
            current = FindNext(data, current, level);
            node.nodeList.add(0, current.nodeList.get(level));
            current.nodeList.set(level, node);
        } while ((level--) > 0);

        return true;
    }

    /**
     * Finds a node in the list with the same data
     * @param data: data to find
     * @return Node: Node found
     */
    private Node Find(T data) {
        return Find(data, head, max);
    }


    /**
     * Returns node with the greatest value
     * @param data: data to find
     * @param current: current Node
     * @param level: level to start form
     * @return Node: current node
     */
    private Node Find(T data, Node current, int level) {
        do {
            current = FindNext(data, current, level);
        } while((level--) > 0);

        return current;
    }

    /**
     * Returns the node at a given level with highest value less than data
     * @param data: data to find
     * @param current: current node
     * @param level: current level
     * @return Node: highest node
     */
    private Node FindNext(T data, Node current, int level) {
        Node next = (Node)current.nodeList.get(level);

        while(next != null) {
            T value = (T) next.data;

            if(LessThan(data, value))
                break;

            current = next;
            next = (Node)current.nodeList.get(level);
        }
        return current;
    }

    /**
     * gets the size of the list
     * @return int: size of the list
     */
    public int size() {
        return size;
    }

    /**
     * Determins if the object is in the list or not
     * @param o: object to test
     * @return boolean: true|false
     */
    public boolean Contains(Object o) {
        T data = (T)o;
        Node node = Find(data);
        return (node != null && node.data != null && EqualTo((T)node.data, data));
    }

    /**
     * Determins if a is less than b
     * @param a: generic type to test
     * @param b: generic type to test
     * @return boolean: ture|false
     */
    private boolean LessThan(T a, T b) {
        return a.compareTo(b) < 0;
    }

    /**
     * Determins if a is equal to b
     * @param a: generic type to test
     * @param b: generic type to test
     * @return boolean: true|false
     */
    private boolean EqualTo(T a, T b) {
        return a.compareTo(b) == 0;
    }

    /**
     * Determins if a is greater than b
     * @param a: generic type to test
     * @param b: generic type to test
     * @return boolean: true|false
     */
    private boolean GreaterThan(T a, T b) {
        return a.compareTo(b) > 0;
    }

}