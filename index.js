#! /usr/bin/env node
import inquirer from 'inquirer';
let quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: What is TypeScript",
        choices: ["A styling language for web development", "A superset of JavaScript that adds static typing", "A database query language", "A server-side scripting language",],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2:How do you declare a variable with a specific type in TypeScript?",
        choices: ["let age = 25: number;", "let age number = 25;", "let age: number = 25;", "let number age = 25;",],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: What is an interface in TypeScript??",
        choices: ["A way to define a variable type;", "A way to define a function", "A way to define the shape of an object", "A way to define a class",],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:How do you create a function in TypeScript with typed parameters and a return type??",
        choices: ["function add(a: number, b: number): number { return a + b; }", "function add(number a, number b): number { return a + b; }", "function add(a, b): number { return a + b; }", "function add(a: number, b: number): void { return a + b; }",],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:What are TypeScript enums used for???",
        choices: ["To create variables", "To define a set of named constants", "To define a function", "To create arrays",],
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A superset of JavaScript that adds static typing":
        console.log("1.✔️ ");
        ++score;
        break;
    default:
        console.log("1.❌");
}
switch (quiz.question_2) {
    case "let age: number = 25":
        console.log("2.✔️ ");
        ++score;
        break;
    default:
        console.log("2.❌");
}
switch (quiz.question_3) {
    case "A way to define the shape of an object":
        console.log("3.✔️ ");
        ++score;
        break;
    default:
        console.log("3.❌");
}
switch (quiz.question_4) {
    case "function add(a: number, b: number): number { return a + b; }":
        console.log("4.✔️ ");
        ++score;
        break;
    default:
        console.log("4.❌");
}
switch (quiz.question_5) {
    case "To define a function":
        console.log("5.✔️ ");
        ++score;
        break;
    default:
        console.log("5.❌");
}
console.log(`score ${score}`);
