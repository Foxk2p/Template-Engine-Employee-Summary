const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)

const info = ['name', 'id', 'title', 'get', 'password', 'address', 'phone', 'ssn']

let questions = []
for (let i = 0; i < info.length; i++) {
  questions.push({
    type: 'input',
    name: info[i],
    message: `What is your ${info[i]}?`
  })
}

const profile = data => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>${data.name}</h1>
  <h2>${data.age}</h2>
  <h3>${data.email}</h3>
  <h4>${data.username}</h4>
  <h5>${data.password}</h5>
  <h6>${data.phone}</h6>
  <h6>${data.address}</h6>
  <h6>${data.ssn}</h6>
</body>
</html>
  `
}

prompt(questions)
  .then(data => writeFileSync('profile.html', profile(data)))
  .then(() => {
    console.log('success!')
  })
  .catch(err => console.log(err))

// message: 'What class of employee woule you like to add to your team?'
// choice: ['Employee', 'Manager', 'Engineer', 'Intern']
//       },