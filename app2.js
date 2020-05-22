const { writeFile, appendFile } = require("fs")
const { prompt } = require("inquirer")
const { promisify } = require("util")


const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)


// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

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
const botton = `
</body >
</html >
`

const userInput = response => {
  return `
<div>
  <h1>${response.name}</h1>
  <h2>${response.title}</h2>
  <h3>ID:${response.id}</h3>
  <h3>Email: ${response.name}@mail.com</h3>
  <h3>Office number:${response.officeNumber}</h3>
  <h3>GitHub: ${response.userName}</h3>
  <h3>School:${response.school}</h3>
</div>
  `
}

// ---------------------------------------------------------------------------

// const mainMenu = () => {
//   prompt({
//     type: 'list',
//     name: 'addorEnd',
//     message: 'Would you like to add an add an employee to your team? If so, what role?',
//     choices: ['Manager', 'Engineer', 'Intern', 'No']
//   })
//     .then(({ action }) => {
//       switch (action) {
//         case 'Manager':
//           managerPrompts()
//           break
//         case 'Engineer':
//           engineerPrompts()
//           break
//         case 'Intern':
//           InternPrompts()
//           break
//         case 'No':
//           process.exit()
//       }
//     })
//     .catch(err => console.log(err))
// }

// mainMenu()

// --------------------------------------------------------
// condition for asking paricular line of questions

// const newQuestion = () => {
//   if () {
//     prompt({

// ------------------------------------------------------

writeFileSync('teamHTML.html', top)
  .then(() => {
    prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Would you like to add an employee to your team? If so, what role?',
        choices: ['Manager', 'Engineer', 'Intern', 'No']
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
        name: 'officeNumber',
        message: 'If they are a manager, what is their office number?',
      },
      {
        type: 'input',
        name: 'userName',
        message: 'If they are an engineer, what is their GitHub username?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'If they are an intern, what school do you go to?'
      }
    ])

      .then(userInfo => {
        console.log(userInfo)
        appendFileSync('teamHTML.html', userInput(userInfo))
        .then(userInfo.name.action) => {
          appendFileSync('teamHTML.html', `</body></html>`)
        }

      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))

appendFileSync('teamHTML.html', botton)
 
if ( ) => {
  appendFileSync('teamHTML.html', `</body></html>`)
}

  // ----------------------------------
  // new Promise ( (res, rej) => {
  //   res (anything)
  //   rej( new Error ( ))
  // })

  // --------------------------------------
// {
//   type: 'input',
//     name: 'title',
//       message: 'What is their title?',

//       },
  // --------------------------------
// prompt(questions)
//   .then(data => writeFileSync('profile.html', profile(data)))
//   .then(() => {
//     console.log('success!')
//   })
//   .catch(err => console.log(err))


// -------------------------------
// const Employee = require("./lib/Employee");

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