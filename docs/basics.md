### 01、原始数据类型

`JavaScript` 的类型分为两种：

+ 原始数据类型
+ 对象类型

原始数据类型包括：

+ 布尔值
+ 字符串
+ 数值
+ null
+ undefined
+ Symbol

这里主要阐述的是原始数据类型在 `TypeScript` 中的应用。

#### 布尔值

```typescript
let isDone: boolean = false;
```

!> 在 `TypeScript` 中，`boolean`、`string`、`number` 是 `JavaScript` 中的基本类型，而 `Boolean`、`String`、`Number` 是 `JavaScript` 中的构造函数。所以， `let isDone : boolean = new Boolean(1)` 是错误的，因为 `new Boolean(1)` 创造的是一个对象。

#### 数值

```typescript
let num: number = 1;
```

在 `Typescript` 中，同样支持 ES6+ 中的二进制和八进制表示法。

#### 字符串

```typescript
let str: string = "Devin";
```

建议使用 ES6+ 中的字符串模板（`${xxx}`）来表示字符串的嵌入表达式。

#### 空值

`JavaScript` 中没有空值（`void`）的概念，但是在 `TypeScript` 中，空值（`void`） 用来表示没有任何返回值的函数。

```typescript
function sayhello(): void {
    console.log("Hello world");
}
```

#### Null 和 Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

在 `TypeScript` 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型。与 `void` 的区别是， `null` 和 `undefined` 是所有类型的子类型。

```typescript
let num: number = undefined;
let obj: any = null;
```



### 02、任意值

任意值（`any`）用来表示允许赋值为任意类型。通常用来定义对象。

+ 赋值过程中改变类型是允许的
+ 任意值的任何属性和方法可以任意调用
+ 变量声明如果未指定类型，默认声明类型为任意值

```typescript
let num: any = 2;
num = 3;

let name: string = "Devin";
console.log(name[0]); // => "D"

let str: any;
str = 1;
str = "Devin";
```

!> 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。



### 03、类型推论

如果定义的时候有赋值但是没有明确的指定类型，`TypeScript` 会依照类型推论（Type Inference）的规则推断出一个类型。

```typescript
let str = 'Devin';
// 以上等价于
let str: string = "Devin";
```

如果定义的时候没有赋值，不管之后有没有赋值，都会推断成 `any` 类型而完全不被类型检查。

```typescript
let str;
// 以上等价于
let str: any;
str = "Devin";
str = 1;
```



### 04、联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。

+ 联合类型使用 `|` 分隔每个类型
+ 如果变量使用联合类型，那么变量只能访问联合类型的所有类型里共有的属性或方法

```typescript
let id: string | number = 1;
// 注意：如果说我们使用字符串的length属性，那么需要注意，如果是number类型是不支持的
// 这一块我们必须使用string或number都支持的类型，所以可以进行调用扩展方法toString()
console.log(id.toString().length);
```



### 05、对象的类型-接口

在 `TypeScript` 中，我们使用接口（Interfaces）来定义对象的类型。`TypeScript` 中的接口除了用于对类的一部分行为进行抽象以外，也常用于对对象的形状进行描述。

+ 确定属性(`name:`)，那么变量赋值的时候，变量的形状必须和接口的形状保持一致
+ 可选属性(`age?:`)，可以允许该属性不存在
+ 任意属性(`[propName: string]:`)，可以允许对象任意存在
+ 只读属性(`readonly id:`)，只能初次赋值，不允许之后赋值

```typescript
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: string | number;
}
let devin: Person {
    id: 1,
    name: "Devin",
    height: 180
}
```

!>  接口中，如果一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。比如，如果在上面代码中 `Person` 定义了 `[propName: string]: string`，那么其他的确定/可选属性（`name`/ `age`）的类型都一并改为 `string` 类型。



### 06、数组的类型

数组类型(用于指定数组中元素的类型)有多种定义方式：

1. 类型+方括号 表示法(`number[]`)
2. 数组泛型表示法(`Array<number>`)
3. 接口形式表示法 - 常用表示类数组

```typescript
let numArr1: number[] = [1, 2];

let numArr2: Array<number> = [1, 2];

interface NumberArr {
    [index: number]: number;
}
let numArr3: NumberArr = [1, 2];
```

#### 类数组

类数组不是数组类型，比如 `arguments`, 类数组不能用普通的数组方式来描述，而应该用接口：

* 类数组都有自己的接口定义，e.g. `Iarguments`, `NodeList`, `HTMLCollection` 等
* `Iarguments`, `NodeList`, `HTMLCollection` 这些在 `TypeScript` 中已定义好，为内置对象，可直接使用

```typescript
function sum() {
    let args: IArguments = arguments;
}
```

#### any 在数组中应用

一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型：

```typescript
let list: any[] = [1, 'b', {c: 3}];
```



### 07、函数的类型

#### 函数声明

+ 输入约束： 函数的参数，需指定类型
+ 输出约束： 函数的返回值，需指定类型

```typescript
function sum(x: number, y: number): number {
    return x + y;
}
```

#### 函数表达式

+ 表达式约束： 函数变量，需指定参数类型和返回值类型
+ 输入约束：函数的参数，需指定类型
+ 输出约束：函数的返回值，需指定类型

```typescript
let sum: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
}
```

!> `TypeScript` 中的 `=>` 用来表示函数的定义，左边表示输入类型，需要用括号括起来，右边表示输出类型。ES6+ 中的 `=>` 用来表示箭头函数。注意区分。

#### 接口定义函数形状

```typescript
interface Sum {
    (x: number, y: number): number;
}
let sum: Sum;
sum = (x: number, y: number): number => {
    return x + y;
}
```

!> 接口定义函数形状与函数表达式定义函数形状类似，但有不同，注意 `:` 和 `=>` 的区别。

#### 可选参数

+ 与对象的接口定义类似，用 `?` 来表示参数可选。
+ 可选参数必须在必需参数后面

```typescript
let sum: (x: number, y?: number) => number = (x: number, y?: number): number => {
  let res: number = 0;
  if (y) {
    res = x + y;
  } else {
    res = x;
  }
  return res;
}
```

#### 默认参数

+ `TypeScript` 会将添加了默认值的参数识别为可选参数
+ 此时可选参数可以在必需参数之前或之后，不受约束

```typescript
function sum(x: number = 1, y: number): number {
    return x + y;
}
console.log(sum(null, 2)); // => 2
console.log(sum(undefined, 2)); // => 3
console.log(sum(2, 3)); // => 5
```

#### 剩余参数

ES6+ 中， 用 `...rest` 的方式获取函数中的剩余参数（`rest`参数），事实上，`rest` 是一个数组，所以，需要用数组的类型来定义它。

```typescript
function sum(x: number = 1, ...items: number[]): number {
  let res: number = 0;
  items.forEach((item) => {
    res += item;
  })
  return res;
}
console.log(sum(null, 2)); // => 2
console.log(sum(2, 3, 4)); // => 7
```

!> 自己实验证明，es5中的 `arguments` 不能实现 `TypeScript` 的剩余参数写法。

#### 重载

重载运行一个函数接受不同数量或者不同类型的参数时，作出不同的处理。e.g. 输入数值，输出数值；输入字符串，输出字符串。

* 前面，重复定义多次函数，精准表达输入输出为指定类型
* 最后一次是函数实现，联合类型

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    } else if(typeof x === 'string') {
        return String(x.split('').reverse().join(''));
    }
}
console.log(reverse(123)); // => 321
console.log(reverse('hello')); // => "olleh"
```



### 08、类型断言

类型断言可以用来手动指定一个值的类型。

#### 语法

+ `值 as 类型` (推荐使用)
+ `<类型>值`

#### 用途

+ 将一个联合类型断言为其中的一个类型。解决在联合类型中，只能访问所有类型中共有的属性和方法这一劣性。

  ```typescript
  interface Cat {
    name: string;
    run(): void;
  }
  interface Fish {
    name: string;
    swim(): void;
  }
  function swim(animal: Cat | Fish): void {
    (animal as Fish).swim();
  }
  let goldFish: Fish = {
    name: "goldFish",
    swim() {
      console.log("I'am a goldFish");
    }
  }
  swim(goldFish); // => "I'am a goldFish"
  ```

+ 将一个父类断言为更加具体的子类

  ```typescript
  class ApiError extends Error {
    code: number = 0;
  }
  
  class HttpError extends Error {
    statusCode: number = 200;
  }
  
  function isApiError(error: Error) {
    return error instanceof ApiError;
  }
  ```

+ 将任何一个类型断言为 `any`

  ```typescript
  window.foo = 1; // !error Property 'foo' does not exist on type 'Window & typeof globalThis'
  
  (window as any).foo = 1;
  ```

  !> 将一个变量断言为 `any` 可以说是解决 `TypeScript` 中类型问题的最后一个手段。它极可能掩盖了真正的类型错误，如果不是非常确定，就不要使用 `as any`。

+ 将 `any` 断言为一个具体的类型

  ```typescript
  function getCacheData(key: string): any {
      return (window as any).cache[key];
  }
  interface Cat {
      name: string;
      run(): void;
  }
  const tom = getCacheData('tom') as Cat;
  tom.run();
  ```

#### 类型断言的限制

 要使得 `A` 能够被断言为 `B`,只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可。

#### 双重断言

双重断言可以打破类型断言的限制，将任何一个类型断言为任何另一个类型。

!>如果使用双重断言，十有八九是错误的。所以，除非迫不得已，千万别用双重断言。

#### 类型断言 VS 类型转换

+ 类型断言只会影响 `TypeScript` 编译时的类型，类型断言语句在编译结果中会被删除
+ 类型断言不是类型转换，它不会真正影响到变量的类型

```typescript
function toBoolean(x: any): boolean {
  return x as boolean;
}
console.log(toBoolean(1)); // => 1
```

以上代码会被编译为：

```javascript
function toBoolean(x) {
    return x;
}
console.log(toBoolean(1)); // => 1
```

如果要进行类型转换，需直接调用类型转换的方法：

```typescript
function toBoolean(x: any): boolean {
  return Boolean(x);
}
console.log(toBoolean(1)); // => true
```

#### 类型断言 VS 类型声明

+ 类型声明比类型断言更加严格
+ 为了增加代码的质量，应该优先使用类型声明，比类型断言的 `as` 更加优雅

```typescript
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: 'tom'
};
let tom: Cat = animal; // !error Property 'run' is missing in type 'Animal' but required in type 'Cat'
let tom = animal async Cat;
```

#### 类型断言 VS 泛型

```typescript
interface getCacheData<T>(key: string): T {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();
```

### 09、声明文件

当使用第三方库的时候，我们需要引用它的声明文件，才能获得对应的代码 补全、接口提示等功能。

+ `declare const` 声明全局变量
+ `declare function` 声明全局方法
+ `declare class` 声明全局类
+ `declare enum` 声明全局枚举类型
+ `declare namespace` 声明全局对象
+ `interface` 和 `type` 声明全局类型
+ `export` 导出变量
+ `export namespace` 导出对象
+ `export default` ES6+默认导出
+ `export = ` commonjs 导出模块
+ `export as namespace` UMD库声明全局变量
+ `declare global` 扩展全局变量
+ `declare module` 扩展模块

#### 声明语句

声明语句就是我们在使用第三库的时候，来规范它的类型，比如，`jQuery`:

```typescript
declare const jQuery: (selector: string) => any;
// 然后开始在typescript中使用
jQuery('#foo');
```

#### 全局变量式声明文件

声明文件就是把声明语句放到一个单独的文件中。声明文件必须以 `.d.ts` 为后缀。比如，`jQuery.d.ts`:

```typescript
// src/jQuery.d.ts
decalre const jQuery: (selector: string) => any;
```

```typescript
// src/index.ts
jQuery('#foo');
```

#### 第三方声明文件

有些第三方的声明文件不需要我们自己定义，npm 已经帮我们定义好了，所以我们可以直接下载使用。`@types` 用于统一管理第三方库的声明文件。

```bash
npm install @types/jquery --save-dev
```



### 10、内置对象

内置对象是指根据标准在全局作用域上存在的对象。

1. ECMAScript的内置对象

   + `Boolean`
   + `Error`
   + `Date`
   + `RegExp`

   ```typescript
   let b: Boolean = new Boolean(1);
   let e: Error = new Error('Error occurred');
   let d: Date = new Date();
   let r: RegExp = /[a-z]/;
   ```

2. DOM和BOM的内置对象

   + `Document`
   + `HTMLElement`
   + `Event`
   + `NodeList`

   ```typescript
   let body: HTMLElement = document.body;
   let allDiv: NodeList = document.querySelectorAll('div');
   document.addEventListener('click', function(e: MouseEvent) {
       // Do something
   });
   ```

3. TypeScript核心库的定义文件

   + `Math`

   ```typescript
   Math.pow(10, 2);
   ```