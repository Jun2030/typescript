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
