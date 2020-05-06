### 类型别名

类型别名用来给一个类型起一个新的名字。

+ 常用于联合类型
+ `type` 创建类型别名

```typescript
type Str = string;
type Num = number;
type StrAndNum = string | number;
function getInput(n: StrAndNum): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n.toString();
  }
}

console.log(getInput("1")); // => "1"
console.log(getInput(1)); // => "1"
```



### 字符串字面量类型

* 字符串字面量类型用来约束取值只能是某几个字符串中的一个

* 类型别名与字符串字面量类型都是使用 `type` 进行定义

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // Do something
}
handleEvent(document.getElementById('hello'), 'scorll');
```



### 元组

数据合并了相同类型的对象，而元组（`Tuple`）合并了不同类型的对象。

+ 可以赋值和访问一个已知的索引元素
+ 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中定义的项
+ 添加越界元素（非元组中的任意类型）时，会报错

```typescript
let me: [string, number, number];
me = ["devin", 20, 180];
console.log(me); // => ["devin", 20, 180]
```



### 枚举

枚举（`Enum`）类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定为红绿蓝等。

+ 枚举成员默认会被赋值从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
+ 如果手动赋值（数字，小数，非数字），未手动赋值的枚举项会接着上一个枚举项递增，如果出现重复，则会后者覆盖前者
+ 枚举项有两种类型：常数项和计算所得项，计算所得

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]); // => 0
console.log(Days["3"]); // => "wed"
```

!> 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 `TypeScript` 无视类型检测，比如： `enum Colors {red, green, yellow = <any>"Y"};`

##### 常数枚举

* 常数枚举是使用 `const enum` 定义枚举类型

* 常数枚举与普通枚举的区别是，它会在编译阶段被删除

* 常数枚举不能包含计算所得项

  ```typescript
  const enum Colors {Red, Green, Yellow};
  let myLoveColor = Colors[1];
  console.log(myLoveColor); // => "Green"
  ```

  

### 类





### 类与接口





### 泛型





### 声明合并





