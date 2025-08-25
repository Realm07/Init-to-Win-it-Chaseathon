
const marks = [79, 65, 76, 24, 98, 54];

let highest = marks[0];
for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}
console.log("Highest Marks (looped):", highest);