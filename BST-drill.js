'use strict';

const BinarySearchTree = require('./BST');

const inOrder = BST => {
  if (BST.key === null) {
    return null;
  }
  const results = [];
  const traverse = BST => {
    if (BST.left) {
      traverse(BST.left);
    }
    results.push(BST.key);
    if (BST.right) {
      traverse(BST.right);
    }
  };
  traverse(BST);
  return results;
};

const preOrder = BST => {
  if (BST.key === null) {
    return null;
  }
  const results = [];
  const traverse = BST => {
    results.push(BST.key);
    if (BST.left) {
      traverse(BST.left);
    }
    if (BST.right) {
      traverse(BST.right);
    }
  };
  traverse(BST);
  return results;
};

const postOrder = BST => {
  if (BST.key === null) {
    return null;
  }
  const results = [];
  const traverse = BST => {
    if (BST.left) {
      traverse(BST.left);
    }
    if (BST.right) {
      traverse(BST.right);
    }
    results.push(BST.key);
  };
  traverse(BST);
  return results;
};

const main = () => {
  const BST = new BinarySearchTree();

  const inputs = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

  inputs.forEach(input => {
    BST.insert(input);
  });

  // console.log(BST);
  console.log(inOrder(BST));
  console.log(preOrder(BST));
  console.log(postOrder(BST));
};

main();
