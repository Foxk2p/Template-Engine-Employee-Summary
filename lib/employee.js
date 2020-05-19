class Employee {
  constructor(name, id, title) {
    this.name = name
    this.id = id
    this.title = title

    getName() {
      return this.name
    }
    getId(){
      return this.id
    }
    getEmail() {
      this.title
    }
    getRole(){
      return "Employee"
    }
    printInfo = () => {
      console.log(`
          Name: ${this.name}
          ID: ${this.id}
          Title: ${this.title}

        `)
    }
  }
}

module.exports = Employee

// GitHub Name: ${ this.getName() }
// ID: ${ this.getId() }
// Email: ${ this.getEmail() }
// Role: ${ this.getRole() }

// let Employee1 = new Employee(`'${this.name}', '${this.id}', '${this.title}'`)

// console.log(Employee1)

// Employee1.getName()
// Employee1.getId()
// Employee1.getEmail()
// Employee1.getRole()
// Employee1.printInfo()

class Manager extends Employee {
  constructor(name, id, title, officeNumber) {
    super(name, id, title)
    this.officeNumber = officeNumber

    getRole(){
      return "Manager"
    }
  }
}

let Manager1 = new Manager(`'${this.name}', '${this.id}', '${this.title}', '${this.officeNumber}'`)

console.log(Manager1)

// Manager1.getName() 
// Manager1.getId() 
// Manager1.getEmail()
// Manager1.getRole()
Manager1.printInfo() = () => {
  // console.log(`
  //         Name: ${this.name}
  //         ID: ${this.id}
  //         Title: ${this.title}
  //         Office Number: ${this.officeNumber}
  //         GitHub Name: ${this.getName()}
  //         ID: ${this.getId()}
  //         Email: ${this.getEmail()}
  //         Role: ${this.getRole()}

  //       `)
}


// ----------------------------------------------
// node04/app.js example

// class Teacher extends Person {
//   constructor(name, age, email, address, subject) {
//     super(name, age, email, address)
//     this.subject = subject
//   }
// }

// let teacher1 = new Teacher('Mr Johnson', 54, 'jjohnson@gmail.com', '321 South St', 'math')

// console.log(teacher1)

