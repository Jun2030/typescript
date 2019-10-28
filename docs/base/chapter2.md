**安装**：

需要有node环境，通过npm安装：

```powershell
npm install typescript -g
```

**编码**：

使用`.ts`文件扩展名。

**编译**：

+ 使用`tsc`命令可编译`.ts`文件，生成一个同名为`.js`文件；
+ 编译的时候即使报错了，还是会生成编译结果（`.js`）



```typescript
// demo.ts
function sayHello(person: string) {
  return `Hello, ${person}`;
}

let user = "Tom";
console.log(sayHello(user));
```

使用`tsc demo.ts`,生成一个同名的demo.js文件：

```javascript
// demo.ts
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Tom";
console.log(sayHello(user));
```

