**基础类型**：

+ 字符串-string
+ 数字-number
+ 布尔值-boolean
+ 空值-void
+ null和undefined
+ 任意值-any
+ 数组
+ 元组Tuple
+ 枚举-enum
+ never
+ symbol
+ object



**定义string类型**：

```typescript
// chapter3.ts
let a: string;
a = "Tom";
```

**定义number类型**：

```typescript
// chatper3.ts
let b: number = 1;
b = 2;
```

**定义boolean类型**：

```typescript
// chapter3.ts
let c: boolean = false;
c = true;
```

**定义void类型**：

```typescript
// chapter3.ts
let d: void = null;
```

**定义null和undefined类型**：

```typescript
// chapter3.ts
let e: null = null;
let f: undefined = undefined;
```

**定义any类型**：

```typescript
// chapter3.ts
let g: any = "seven";
g = 7;
```

**定义数组**：

```typescript
// chapter3.ts
let h: number[] = [1, 2, 3];
let i: Array<number> = [4, 5, 6];
```

**定义元组**：

```typescript
// chapter3.ts
let j: [string, number] = ["hello", 20];
j[0] = "hi";
j[1] = 10;
```

**定义enum**：

```typescript
// chatper3.ts
enum k {
  a,
  b = 3,
  c
}
console.log(k["a"]); // => 0
console.log(k[1]); // => undefined
console.log(k.c); // => 4
```

**定义never**:

```typescript
// chapter3.ts
function error(msg: string): never {
  throw new Error(msg);
}
```

**定义symbol**:

```typescript
// chapter3.ts
let l = Symbol();
```

**定义object**:

```typescript
// chapter3.ts
let m: Date = new Date();
```

