/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.yin
 * @Date: 2021-04-01 09:43:24
 * @LastEditors: Mr.yin
 * @LastEditTime: 2021-04-01 10:22:21
 */
/**1006. 笨阶乘
*通常，正整数 n 的阶乘是所有小于或等于 n 的正整数的乘积。例如，factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1。
*相反，我们设计了一个笨阶乘 clumsy：在整数的递减序列中，我们以一个固定顺序的操作符序列来依次替换原有的乘法操作符：乘法(*)，除法(/)，加法(+)和减法(-)。
*例如，clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1。然而，这些运算仍然使用通常的算术运算顺序：我们在任何加、减步骤之前执行所有的乘法和除法步骤，并且按从左到右处理乘法和除法步骤。
*另外，我们使用的除法是地板除法（floor division），所以 10 * 9 / 8 等于 11。这保证结果是一个整数。
*实现上面定义的笨函数：给定一个整数 N，它返回 N 的笨阶乘。
* 
*示例 1：
*输入：4
*输出：7
*解释：7 = 4 * 3 / 2 + 1
*
*示例 2：
*输入：10
*输出：12
*解释：12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
* 
*提示：
*1 <= N <= 10000
*-2^31 <= answer <= 2^31 - 1  （答案保证符合 32 位整数。）
*/

/**
 * @param {number} N
 * @return {number}
 */

 var clumsy = function(n) {
     //total 先为首个数
    let total = n--,res = 0; 
     while(n){
         // 累乘 a*b
         if(n > 0){
             total *= n--;
         }

         // 累除 a*b/c,同时将结果加上 将a*b/c total的作为一个数参与加减，清空total
         if(n > 0){
             // trunc来截断小数，实现地板取整，floor负数取整会向上取整 例-2.9 => -3
             total  = Math.trunc(total/n--); 
             res += total;
             total = 0;
         }

        // 累加,直接往总数上加就好
         if(n > 0){
             res+= n--;
         }

        // 减 重新赋值total
         if(n > 0){
             total = -n--;
         
         }
     }

    // 当total不为0，即代表当前没有完整的 a*b/c 的过程，需要加结果累加到总数中
     if(total !== 0){
         res += total;
     }
     console.log(res);
    return res;
};
clumsy(10)