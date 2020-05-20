const { writeFile, appendFile } = require("fs")
const { prompt } = require("inquirer")
const { promisify } = require("util")


const writeFileSync = promisify(writeFile);
const appendFileSync = promisify(appendFile);

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teammember = ''
let teamHTML = ''
let role = ''
let team = ''

const top = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
</head>
<body>
`

const userInput = response => {
  return `
<div>
  <h1>${response.name}</h1>
  <h2>${response.role}</h2>
  <h3>ID:${response.id}</h3>
  <h3>Email: ${response.name}@mail.com</h3>
  <h3>Office number:${response.officeNumber}</h3>
  <h3>GitHub: ${response.userName}</h3>
  <h3>School:${response.school}</h3>
</div>
  `
}

writeFileSync('teamHTML.html', top)
  .then(() => {
    prompt(
      {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add to your team?',
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their empoyee id?'
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is their title?'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'If they are a manager, what is their office number?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'If they are an engineer, what is their GitHub username?',
      },
      {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'school',
        message: 'If they are an intern, what school do you go to?'
      },
    )

      .then(userInfo => {
        console.log(userInfo)
        appendFileSync('teamHTML.html', userInput(userInfo))

      })
  })
  .catch(err => console.log(err))


// ./templates/
// -----------------------------------------------------------------
// const info = ['Are you a Manager Engineer or Intern' 'What is your name', 'What is your id', 'What is your title', 'What is your email', 'What is your officeNumber', 'address', 'phone', 'ssn']

// ----------------------------------------------------------------
// const { prompt } = require('inquirer')
// const { writeFile } = require('fs')
// const { promisify } = require('util')

// const writeFileSync = promisify(writeFile)

// const info = ['name', 'id', 'title', 'get', 'password', 'address', 'phone', 'ssn']

// let questions = []
// for (let i = 0; i < info.length; i++) {
//   questions.push({
//     type: 'input',
//     name: info[i],
//     message: `What is your ${info[i]}?`
//   })
// }

// const profile = data => {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>${data.name}</h1>
//   <h2>${data.age}</h2>
//   <h3>${data.email}</h3>
//   <h4>${data.username}</h4>
//   <h5>${data.password}</h5>
//   <h6>${data.phone}</h6>
//   <h6>${data.address}</h6>
//   <h6>${data.ssn}</h6>
// </body>
// </html>
//   `
// }

// prompt(questions)
//   .then(data => writeFileSync('profile.html', profile(data)))
//   .then(() => {
//     console.log('success!')
//   })
//   .catch(err => console.log(err))


// ------------------------------------------------------------
// message: 'What class of employee woule you like to add to your team?'
// choice: ['Employee', 'Manager', 'Engineer', 'Intern']
//       },