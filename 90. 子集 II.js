/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.yin
 * @Date: 2021-03-31 15:52:02
 * @LastEditors: Mr.yin
 * @LastEditTime: 2021-03-31 17:19:48
 */
/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
    解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

    示例 1：
    输入：nums = [1,2,2]
    输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

    示例 2：
    输入：nums = [0]
    输出：[[],[0]]
 */

/**
 * 递归
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
   let res = []
   let len = nums.length
   let temp = []
   let hash = {}
   let  recursion = (temp,start)=>{
      res.push(temp)
      for(let i = start;i < len;i++){
         if(hash[i] || (i > 0 && !hash[i-1] && nums[i-1] == nums[i])) continue;
         hash[i] = true;
         temp.push(nums[i]);
         recursion(temp.slice(),i+1);
         hash[i] = false;
         temp.pop();
      }
      
   }
   recursion(temp,0)
   console.log(res);
   return res
};


let nums = [1,2,2]
subsetsWithDup(nums)