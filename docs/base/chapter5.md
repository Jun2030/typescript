**数组有两种定义方式**：

1. 类型 +方括号（type[]）: 这种方式定义的数组项中不允许出现其他的类型

   ```typescript
   // chapter5.ts
   let list: number[] = [1, 2, 3];
   ```

2. 数组泛型（Array<type>）:

   ```typescript
   // chapter5.ts
   let list: Array<string> = ['a', 'b', 'c'];
   ```

   

