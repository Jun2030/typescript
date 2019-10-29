数组类型表示已知元素数量和类型的集合，各元素的类型必须相同。但是很多情况并非如此，比如需要集合中有多种类型的元素，TypeScript中称之为元组Tuple。

**定义元组**：

```typescript
// chapter6.ts
let tuple: [string, string, number] = ["a", "b", 3];
console.log(tuple[2]); // => 3
```

**特点**：

1. 当访问一个已知索引的元素，会返回正确的类型
2. 越界元素，当访问超出元组长度的元素时，它的类型会被限制为元组中每个类型的联合类型

```typescript
// chapter6.ts
let tuple: [string, string, boolean] = ["x", "y", false];
let m = tuple[2];
console.log(m); // => false
tuple[3] = "hello"; // !error TypeScript2.7+不能越界访问
```



