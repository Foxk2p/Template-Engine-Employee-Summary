const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github

    getGithub() {
      return this.github
    }
    getRole(){
      return "Engineer"
    }
  }
}



module.exports = Engineer

// let Engineer1 = new Teacher('Mr Johnson', 54, 'jjohnson@gmail.com', '321 South St', 'math')
