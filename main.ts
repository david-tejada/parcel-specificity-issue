import { calculate } from "specificity";

console.log(calculate("button.someClass #id #something.some-class:before"));

// const selector = "button.someClass #id #something.some-class:before";

// const oneLiner = selector.replace("\n", " ");

// console.log(oneLiner);

// const details = calculateWithDetails(oneLiner);

// console.log(details);

// const result = calculateWithDetails(oneLiner).contributingParts.map((part) =>
//   selector.slice(part.start.column - 1, part.end.column - 1)
// );

// console.log(result);
