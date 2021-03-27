---
id: 60-get-permutation
title: 排列序列
sidebar_label: 60. 排列序列
keywords:
  - backtrack
---

:::success Tips
题目类型: 回溯算法
:::

## 题目

给出集合 [1,2,3,...,n], 其所有元素共有 n! 种排列.

按大小顺序列出所有排列情况, 并一一标记, 如当 n = 3 时, 所有排列为: "123", "132", "213", "231", "312", "321"

给定 n 和 k, 返回第 k 个排列.

:::info 示例

```bash
输入: n = 3, k = 3

输出: 213
```

```bash
输入: n = 4, k = 9

输出: 2314
```

:::

## 题解

该题为[46. 全排列](/leetcode/medium/46-permute)的变种, 只不过是在全排列的过程中, 获取第 k 个数即可.

```ts
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = ''
  let count = 0

  const backtrack = (track) => {
    if (track.length === n) {
      count += 1
      if (count === k) {
        res = track.slice().join('')
        return
      }
    }

    for (let i = 1; i <= n; i++) {
      if (!track.includes(i)) {
        track.push(i)
        backtrack(track)
        track.pop()
      }
    }
  }

  backtrack([])

  return res
}
```