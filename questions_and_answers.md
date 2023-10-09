<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: ?

<i>In the given code, there is a typographical error: greetign is misspelled as greeting. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: "12"</b></summary>
<p>

#### Answer: ?

<i>In this case, 1 is a number, and "2" is a string. When you add them using the + operator, JavaScript converts 1 to the string "1" and concatenates it with "2", resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i>The info.favoriteFood variable is assigned a new value "🍝", but it does not affect the original food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: Hi there, undefined</b></summary>
<p>

#### Answer: ?

<i>In the given code, the sayHi function expects a name parameter, but it is not provided when the function is called. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i> Since the array contains three truthy values (1, 2, and 3), the count variable is incremented three times. Therefore, the final value of count is 3, and it is logged to the console.</i>

</p>
</details>
