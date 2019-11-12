函数是JavaScript应用程序的基础。

和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。

**TypeScript声明函数的两种方式**

1. 函数声明式
2. 函数表达式

**函数声明：**

```typescript
// demo.ts
function student(name: string, age: number): string {
  return `我是${name}, 今年${age}岁`;
}
let newStudent: string = student("子俊", 22);
console.log(newStudent); // => 我是子俊，今年22岁
```

> !如果出现了“函数实现重复”类似的错误，则需要在根目录新建一个“tsconfig.json”文件，为空可即可。

形式和JavaScript中的函数声明一样，不一样的是什么呢？

1. TS中指定了参数的类型，指定了返回值的类型（返回值类型可以省略，因为TS会根据返回语句自动推断返回值类型）
2. 参数不可多不可少，只能刚刚好，且和顺序有关

**函数表达式：**

```typescript
// demo.ts
let student: (name: string, age: number) => string = (
  name: string,
  age: number
): string => {
  return `我是${name},今年${age}岁`;
};

let newStudent = student("子俊", 22);
console.log(newStudent); // => 我是子俊,今年22岁
```

！注意：

1. 前后参数名称可以不一致

   ```typescript
   // demo.ts
   let student: (x: string, y: number) => string = (
     name: string,
     age: number
   ): string => {
     return `我是${name},今年${age}岁`;
   };
   
   let newStudent = student("子俊", 22);
   console.log(newStudent); // => 我是子俊,今年22岁
   ```

2. 声明函数是类型推论的一种

   let student: (x:string,y:number)=>string  = (name:string,age:number) => {}

   声明变量：指定函数类型 = 根据指定函数类型定义函数

3. 函数声明的返回值为空的情况,关键字`void`

   ```typescript
   // demo.ts
   let student: (x: string, y: number) => void = (
     name: string,
     age: number
   ): void => {
     console.log("不返回内容");
   };
   
   let newStudent = student("子俊", 22);
   ```

**接口中函数的定义：**

```typescript
// demo.ts
interface Student {
  (x: string, y: number): string;
}
let student1: Student;
student1 = (name: string, age: number) => {
  return `他是${name},年龄为${age}`;
};

let newStudent = student1("小明", 18);
console.log(newStudent); // => 他是小明,年龄为18
```

**可选参数：**

```typescript
// demo.ts
let student: (name: string, age: number, sex?: string) => string = (
  name: string,
  age: number,
  sex?: string
) => {
  return `我是${name},${age}岁${sex ? ",性别" + sex : ""}`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁
console.log(student2); // => 我是小红,20岁，性别女
```

**默认参数：**

```typescript
// demo.ts
let student: (name: string, age: number, sex?: string) => string = (
  name: string,
  age: number,
  sex = "男"
) => {
  return `我是${name},${age}岁${sex ? ",性别" + sex : ""}`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁,性别男
console.log(student2); // => 我是小红,20岁,性别女
```

**剩余参数：**

在JavaScript中，可以使用arguments来访问所有传入的参数，在TypeScript中，可以把所有参数搜集到一个变量。

```typescript
// demo.ts
let student: (name: string, age: number, ...others: Array<string>) => string = (
  name: string,
  age: number,
  ...others: string[]
) => {
  return `我是${name},${age}岁`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁
console.log(student2); // => 我是小红,20岁
```

**函数重载：**

重载是为同一个函数提供多个类型提供多个函数类型定义，允许函数对传入不同的参数返回不同的结果分别做类型检查，比如实现一个数字或字符串的反转函数：

```typescript
// demo.ts
function reverse(text: number): number;
function reverse(text: string): string;
function reverse(text: number | string): number | string {
  if (typeof text === "string") {
    return text
      .split("")
      .reverse()
      .join("");
  } else if (typeof text === "number") {
    return +text
      .toString()
      .split("")
      .reverse()
      .join("");
  }
}
```

重复定义多次函数`reverse`，前几次都是函数定义，最后一次是函数实现。

TypeScript与JavaScript的处理流程相似，它会查找重载列表，从第一个重载定义开始匹配，如果匹配的话就使用这个定义，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。