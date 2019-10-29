枚举类型用于取值被限定在一定范围内的场景，如一周只有7天，一年只有4季等。

**枚举初始化**：

可以理解为枚举成员赋值。每个枚举成员都需要带有一个值，在未赋值的情况下，枚举成员会被赋值为从0开始，不长为1递增的数字，同时枚举名和值也会进行反向映射：

```typescript
// chapter7.ts
enum Weeks {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}
console.log(Weeks["Mon"]); // => 0
console.log(Weeks[0]); // => Mon
console.log(Weeks.Thu); // => 3
```

以上会被编译为：

```javascript
let Weeks = {0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun",
             Mon: 0, Tue: 1, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7};
```

**手动赋值**：

手动赋值可以是小数或者负数，后续为赋值的项仍是递增加1

```typescript
// chapter7.ts
enum Weeks {
  Mon = -10,
  Tue,
  Wed = 0.2555,
  Thu,
  Fri,
  Sat,
  Sun
}
console.log(Weeks["Mon"]); // => -10
console.log(Weeks[0]); // => undefined
console.log(Weeks.Thu); // => 1.2555
```

**数字枚举**：

```typescript
// chapter7.ts
enum Colors {red, yellow, blur};
```

**字符串枚举**：

```typescript
// chapter7.ts
enum Direction {Up = "Up", Down = "Down", Left = "Left", Right = "Right"};
```

**常量枚举-const enum**：

常量枚举与普通枚举的区别是：它会在编译阶段被删除，并且不能包含计算成员。

```typescript
// chapter7.ts
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];
console.log(directions); // => [0, 1, 2, 3]
```

**外部枚举-declare enum**：

外部枚举与声明语句一样，常出现在声明文件中。

`declare`定义的类型只会用于编译时的检查，编译结果中会被删除。

外部枚举的作用就是为了避免重复的问题。意思就是，如果其他的文件中定义有相同的枚举对象，为了避免相同枚举对象里定义的相同枚举名称带来的冲突，这样定义了过后，重复的名称就不能再使用了。

```typescript
// chapter7.ts
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
```

运行`tsc chapter7.ts`之后：

```javascript
// chapter7.js 
// 编译之后被删除
```

> 注意：同时使用`declare`和`const`也是可以的，编译结果同==常量枚举一致==。

