"use strict";

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

      if (!nextNum) nextNum = current.val;
      if (current.val > lowerBound && current.val < nextNum) {
        nextNum = current.val;
      }

      // if (node.left) {
      //   console.log("LEFT NODE", node.left);
      //   debugger
      //   toVisitStack.push(node.left);
      // }

      // if (node.right) {
      //   console.log("RIGHT NODE", node.right);
      //   debugger
      //   toVisitStack.push(node.right);
      // }
    }

    return nextNum;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
