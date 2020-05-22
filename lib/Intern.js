const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school

    this.getSchool = () => {
      return this.school
    }
    this.getRole = () => {
      return "Intern"
    }
  }
}


module.exports = Intern