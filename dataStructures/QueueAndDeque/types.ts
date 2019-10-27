export interface ICommon {
  isEmpty(): boolean // 判断队列是否为空
  size(): number // 返回队列的个数
  clear(): void // 清空队列
  toString(): string
}

export interface IQueue extends ICommon {
  enqueue(elements: string | string[]): void // 向队尾插入一个或多个元素
  dequeue(): void // 移除队头元素并返回该元素
  peek(): string // 返回队头元素，有时该方法也叫做 front 方法
}

export interface IDeque extends ICommon {
  addFront(element: number | string): void // 在队头添加新元素
  addBack(element: number | string): void // 在队尾添加新元素，等同于 Queue 的 enqueue
  removeFront(): void // 移除队头元素并返回该元素，等同于 Queue 的 dequeue
  removeBack(): void // 移除队尾元素并返回该元素，等同于 Stack 的 pop
  peekFront(): void // 返回队头元素，等同于 Queue 的 peek
  peekBack(): void // 返回队尾元素，等同于 Stack 的 peek
}
