TypeScript和JavaScript类型，其var、let、const的区别基本一致，以下主要讲解ES6中他们的区别

**var**:

ES5中只有全局作用域和函数作用域。`var`就是函数作用域。

**let**:

ES6中新增了块级作用域的概念。`let`和`const`。

**const**:

和`let`的作用域一致，不同的是`cont`定义的是常量，一旦定义，不可改变。

**函数作用域 vs 块级作用域**：

```javascript
// chapter4.js
var sum: number = 0;
for (var i = 0; i < 3; i++) {
  sum += i;
}
console.log(sum); // => 3
console.log(i); // => 3 函数作用域
```

```javascript
// chapter4.js
let sum: number = 0;
for (let i = 0; i < 3; i++) { // 块级作用域
  sum += i;
}
console.log(sum); // => 3
console.log(i); // !error
```

**变量提升 vs 暂时性死区**：

```javascript
// chapter4.js
console.log(a); // => undefined
var a = 1;
```

```javascript
// chapter4.js
console.log(a); // !error
let a = 1;
```

**重复声明 vs 不允许重复声明**：

```javascript
// chapter4.js
var a = 1;
var a = 2;
```

```javascript
// chapter4.js
let a = 1;
let a = 2; // !error
```

**全局变量 vs 全局对象的属性**：

```javascript
// chapter4.js
var a = 1;
console.log(window.a); // => 1
console.log(this.a); // => 1
```

```javascript
// chapter4.js
let a = 1;
console.log(window.a); // => undefined
console.log(this.a); // => undefined
```

