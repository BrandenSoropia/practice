/**
 * Super basic, unbalanced binary search tree with insert.
 * @param {*} param0
 */
const Node = ({ value, left = null, right = null }) => {
  return { value, left, right };
};

let bstRoot = Node({ value: 10 });

const insert = ({ value, root }) => {
  if (!root) {
    return Node({ value });
  } else if (value <= root.value) {
    root.left = insert({ value, root: root.left });
  } else {
    root.right = insert({ value, root: root.right });
  }

  return root;
};

insert({ value: 14, root: bstRoot });
insert({ value: 6, root: bstRoot });
insert({ value: 12, root: bstRoot });
insert({ value: 7, root: bstRoot });
insert({ value: 7, root: bstRoot }); // Same value

console.log(bstRoot);
console.log("Parent and child node with same value:\n", bstRoot.left.right);
