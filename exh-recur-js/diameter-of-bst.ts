var diameterOfBinaryTree = function(root) {

  function height(root, n = 0){
      if (!root) return 0;
      console.log(root.val)
      n = 1 + Math.max(height(root.left), height(root.right))

      return n;
  }

  const leftHeight = height(root.left)
  const rightHeight = height(root.right)

  return leftHeight + rightHeight;
};
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

diameterOfBinaryTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])