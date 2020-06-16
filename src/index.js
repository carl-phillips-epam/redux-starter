import { pipe } from "lodash/fp";
// import { add } from "./currying";

let input = "    Javascript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();
const transform = pipe(trim, toLowerCase, wrap("span"));

// console.log(wrapInDiv(toLowerCase(trim(input))));
console.log(transform(input));
