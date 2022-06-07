/*
 * @Author: chengruolan chengruolan
 * @Date: 2022-05-15 15:59:43
 * @LastEditors: chengruolan chengruolan
 * @LastEditTime: 2022-05-15 16:40:09
 * @FilePath: /vue源码学习/js学习/promise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//实现promise函数

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  const self = this;
  self.state = PENDING;
  self.value = null;
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];
  function resolve(value) {
    if (self.state === PENDING) {
      self.state = RESOLVED;
      self.value = value;
      self.resolvedCallbacks.map((cb) => {
        self.value = cb(self.value);
      });
    }
  }

  function reject(value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.value = value;
      self.rejectedCallbacks.map((cb) => cb(self.value));
    }
  }

  try {
    fn(resolve, reject);
  } catch {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (r) => {
          throw r;
        };
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled);
    that.rejectedCallbacks.push(onRejected);
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value);
  }
  if (that.state === REJECTED) {
    onRejected(that.value);
  }
  return that;
};

new MyPromise((resolve, reject) => {
  console.log("3");
  setTimeout(() => {
    resolve(1);
  }, 0);
})
  .then((value) => {
    console.log(value);
    return 6;
  })
  .then((value) => {
    console.log(value);
    return 7;
  })
  .then((value) => {
    console.log(value);
  });

console.log("2");
// let f = (resolve) => {
//     resolve('1')
// }
// new MyPromise(f).then(e=>{
//     console.log(e)
// })
