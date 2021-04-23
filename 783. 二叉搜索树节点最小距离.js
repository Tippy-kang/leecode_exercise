/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.yin
 * @Date: 2021-04-13 11:13:34
 * @LastEditors: Mr.yin
 * @LastEditTime: 2021-04-13 11:15:14
 */
// https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
// 783. 二叉搜索树节点最小距离
// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
// 示例 1：
// 输入：root = [4,2,6,1,3]
// 输出：1

// 示例 2：
// 输入：root = [1,0,48,null,null,12,49]
// 输出：1

/**
 * @分析
 * 1. 看到二叉搜索树就想到中序遍历是一个有序递增数组，最小的肯定是在相邻的节点之间
 */
 var minDiffInBST = function (root) {
    if (!root) return 0
    let min = Infinity
    let temp = null
    const dfs = root => {
        if (!root) return
        dfs(root.left)
        if (temp) {
            min = Math.min(min, root.val - temp)
        }
        temp = root.val
        dfs(root.right)
    }
    dfs(root)
    return min
};
