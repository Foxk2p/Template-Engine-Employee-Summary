const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, title, email, github) {
    super(name, id, title, email)
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
