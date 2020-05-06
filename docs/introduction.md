### 什么是TypeScript

`TypeScript` 是 `JavaScript` 的一个超集。主要提供了类型系统和对ES6+的支持。由 Microsoft 开发。

**应用:** `vue3.0`, `angular2.0`, `vscode`…

**特点:**

1.  编译型语言：编译为js后运行，单独无法运行
2. 强类型语言
3. 面向对象的语言

**优势:**

1. 类型系统实际上是最好的文档，大部门的函数看看类型的定义就可以知道如何使用；
2. 可以在编译阶段就发现大部分错误，这总比在运行时候出错要好；
3. 增强了编辑器和IDE的功能，包括代码补全、接口提示、跳转到定义、重构等

**总结：** `TypeScript` 增加了代码的可读性和可维护性



### TypeScript安装

 需要有 `node` 环境，通过 `npm` 安装，之后可以在任何地方执行 `tsc` 命令：

```bash
npm install typescript -g
```

**编码：** 使用 `.ts` 文件扩展名

**编译：** 

+ 使用 `tsc` 命令可以编译 `.ts` 文件，生成一个同名的 `.js` 文件

+ 编译的时候即使报错了，还是会生成编译结果（`.js`）

  ```typescript
  // test01.ts
  function sayHello(person: string) : string {
    return `Hello, ${person}`;
  }
  ```

  使用 `ts test01.ts`，生成一个同名的 `test01.js` 文件：

  ```javascript
  // test01.js
  function sayHello(person) {
      return "Hello, " + person;
  }
  ```

