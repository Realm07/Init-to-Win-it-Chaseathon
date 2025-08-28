import express from "express";

const app = express();
const port = 3000;

let students = [
  {name: "Monis", age: 22, hobbies: "playing gaming" },
  {name: "Shees", age: 20, hobbies: "playing football" },
  {name: "Kaif", age: 20, hobbies: "exploring the world" },
];

const response = {
    name: "Deepesh",
    age: 21,
    hobbies: "watching sports"
}

app.get("/students", (req, res) =>{
    res.json(students)
})

app.post("/students/new", (req, res) =>{
    const newStudent = {
      name: "Deepesh",
      age: 21,
      hobbies: "watching sports",
    };

    students.push(newStudent);
    res.status(200).json({students: students})
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

//Postman Response
// {
//     "students": [
//         {
//             "name": "Monis",
//             "age": 22,
//             "hobbies": "playing gaming"
//         },
//         {
//             "name": "Shees",
//             "age": 20,
//             "hobbies": "playing football"
//         },
//         {
//             "name": "Kaif",
//             "age": 20,
//             "hobbies": "exploring the world"
//         },
//         {
//             "name": "Deepesh",
//             "age": 21,
//             "hobbies": "watching sports"
//         },
//         {
//             "name": "Deepesh",
//             "age": 21,
//             "hobbies": "watching sports"
//         }
//     ]
// }