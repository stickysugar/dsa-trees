"use strict";

const { Queue, QNode } = require("./queue");

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;

    let distance = 1;
    let minDistance = Infinity;

    function _goDown(node) {
      if (node.left) {
        distance++;
        _goDown(node.left);
      }

      if (node.right) {
        distance++;
        _goDown(node.right);
      }

      if (!node.right && !node.left) {
        if (distance < minDistance) minDistance = distance;
        distance--;
      }
    }
    _goDown(node);
    return minDistance;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;

    let distance = 1;
    let maxDistance = 1;

    function _goDown(node) {
      if (node.left) {
        distance++;
        _goDown(node.left);
      }

      if (node.right) {
        distance++;
        _goDown(node.right);
      }

      if (!node.right && !node.left) {
        if (distance > maxDistance) maxDistance = distance;
        distance--;
      }
    }
    _goDown(node);
    return maxDistance;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if (!node) return null;
    let nextNum = null;

    let toVisitStack = [node];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      debugger

      if (!nextNum && current.val > lowerBound) nextNum = current.val;
      if (current.val > lowerBound && current.val < nextNum) {
        nextNum = current.val;
        debugger
      }

      if (current.left) {
        toVisitStack.push(current.left);
        debugger
      }

      if (current.right) {
        toVisitStack.push(current.right);
        debugger
      }
    }

    return nextNum;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === node2 || !this.root) return false
    let node1Depth; 
    let node2Depth; 
    let node1Parent; 
    let node2Parent; 
    let q = new Queue();
    q.enqueue([this.root,1,null])

    while (q.size) {
      const [current,depth,parent] = q.dequeue()
      if (current === node1) node1Depth = depth;
      if (current === node2) node2Depth = depth;
      if (current === node1) node1Parent = parent;
      if (current === node2) node2Parent = parent;
      current.left && q.enqueue([current.left,depth + 1,current])
      current.right && q.enqueue([current.right,depth + 1,current])
    }

    return (node1Depth === node2Depth && node1Parent !== node2Parent)
  
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
