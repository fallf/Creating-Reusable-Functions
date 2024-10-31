// 1. Sum of Array of Numbers
function sumArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const array = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(array)); // Output sum

// 2. Calculate and Return Average
function getAverage(array) {
  return sumArray(array) / array.length;
}
console.log("Average of array:", getAverage(array)); // Output average

// 3. Find the Longest String in an Array
function findLongestString(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
console.log("Longest string:", findLongestString(["cat", "tiger", "elephant"])); // Output longest string

// 4. Filter Strings Longer Than a Given Length
const stringsLongerThan = (strings, length) =>
  strings.filter((str) => str.length > length);
const words = ["say", "hello", "in", "the", "morning"];
const minLength = 3;
console.log("Strings longer than", minLength, ":", stringsLongerThan(words, minLength)); // Output filtered strings

// 5. Sort Array of Objects by Age
const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
function byAge(arr) {
  return arr.sort((a, b) => Number(a.age) - Number(b.age));
}
console.log("Sorted by age:", byAge(data)); // Output sorted data

// 6. Filter People with Age Greater Than 50
function filterAgeOver50(arr) {
  return arr.filter(person => Number(person.age) <= 50);
}
console.log("People age 50 or below:", filterAgeOver50(data)); // Output filtered people

// 7. Change Occupation Key and Increment Age
function changeOccupationAndAge(arr) {
  return arr.map(person => ({
    ...person,
    job: person.occupation,
    age: Number(person.age) + 1
  }));
}
console.log("Changed occupations and incremented ages:", changeOccupationAndAge(data)); // Output changed data

// 8. Calculate Sum of Ages
function sumAges(arr) {
  return arr.reduce((total, person) => total + Number(person.age), 0);
}
console.log("Sum of ages:", sumAges(data)); // Output sum of ages

// 9. Calculate Average Age
function averageAge(arr) {
  return sumAges(arr) / arr.length;
}
console.log("Average age:", averageAge(data)); // Output average age

// 10. Increment Age Field
function incrementAge(obj) {
  obj.age = (obj.age || 0) + 1;
  obj.updated_at = new Date();
}
const samplePerson = { name: "John" };
incrementAge(samplePerson);
console.log("After incrementing age:", samplePerson); // Output updated object

// 11. Copy Object and Increment Age
function copyAndIncrementAge(obj) {
  const newObj = { ...obj, age: (obj.age || 0) + 1, updated_at: new Date() };
  return newObj;
}
const copiedPerson = copyAndIncrementAge(samplePerson);
console.log("Original person after copy:", samplePerson); // Output original
console.log("Copied person with incremented age:", copiedPerson); // Output copied object

// 12. Print Numbers from 1 to n Using Recursion
function printNumbers(n) {
  if (n < 1) return; // Base case to stop recursion
  printNumbers(n - 1); // Recursive call
  console.log(n); // Print the current number
}
console.log("Print numbers from 1 to 5:");
printNumbers(5); // This will print 1, 2, 3, 4, 5
