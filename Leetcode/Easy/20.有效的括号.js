/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true

  let stack = []
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.unshift(s[i])
    } else {
      if (stack[0] === '{' && s[i] === '}') stack.shift()
      else if (stack[0] === '[' && s[i] === ']') stack.shift()
      else if (stack[0] === '(' && s[i] === ')') stack.shift()
      else return false
    }
  }

  return stack.length === 0
}
// @lc code=end

// 思路
//
// 遇到括号匹配先想到栈
// 如果 s[i] 是 { [ (, 就压入栈中
// 否则当 s[i] 是 } ] ) 时, 如果 stack[0] 对应着 { [ (, 就弹出栈顶元素, 如果不对应, 就不是有效的括号 
