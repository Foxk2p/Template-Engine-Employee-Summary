// class Employee {
//   constructor(name, id, title, getName(), getId(), getEmail(), getRole()) {
//   this.name = name
//   this.id = id
//   this.title = title
//   this.getName() = getName()
//   this.getId() = getId()
//   this.getEmail() = getEmail()
//   this.getRole() = getRole()
//   this.printInfo = () => {
//     console.log(`
//       Name: ${this.name}
//       ID: ${this.id}
//       Title: ${this.title}
//       GitHub Name: ${this.getName()}
//       ID: ${this.getId()}
//       Email: ${this.getEmail()}
//       Role: ${this.getRole()}
      
//     `)
//   }
// }
// }

// let Employee1 = new Employee(`'${this.name}', '${this.id}', '${this.title}', '${this.getName()}', '${this.getId()}', '${this.getEmail()}', '${this.getRole()}'`)

// console.log(Employee1)
// Employee1.printInfo()

// class Manager extends Employee {
//   constructor(name, id, title, getName(), getId(), getEmail(), getRole()) {
//   super(officeNumber, getRole())
//   this.officeNumber = officeNumber
//   this.getRole() = getRole()
// }
// }

// let Manager1 = new Manager(`'${this.name}', '${this.id}', '${this.title}', '${this.getName()}', '${this.getId()}', '${this.getEmail()}', '${this.getRole()}', '${this.officeNumber}, '${this.getRole()}`)

// console.log(Manager1)
// Manager1.printInfo()


// ------------------------------------------------
// class extends continued
// class Student extends Employee {
//   constructor(name, age, email, address, gpa, grade, favoriteSubject) {
//     super(name, age, email, address)
//     this.gpa = gpa
//     this.grade = grade
//     this.favoriteSubject = favoriteSubject
//   }
// }

// let student1 = new Student('Jack Doe', 18, 'jackdoe@gmail.com', '123 West St', 3.8, 12, 'english')

// console.log(student1)

// ------------------------------------------------------
// EXAMPLES
// class Person {
//   constructor(name, age, email, address) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.address = address
//     this.printInfo = () => {
//       console.log(`
//       Name: ${this.name}
//       Age: ${this.age}
//       Email: ${this.email}
//       Address: ${this.address}
//     `)
//     }
//   }
// }

// let person1 = new Person('John Doe', 54, 'johndoe@gmail.com', '123 Main St')

// person1.printInfo()

// class Teacher extends Person {
//   constructor(name, age, email, address, subject) {
//     super(name, age, email, address)
//     this.subject = subject
//   }
// }

// let teacher1 = new Teacher('Mr Johnson', 54, 'jjohnson@gmail.com', '321 South St', 'math')

// console.log(teacher1)


// class Student extends Person {
//   constructor(name, age, email, address, gpa, grade, favoriteSubject) {
//     super(name, age, email, address)
//     this.gpa = gpa
//     this.grade = grade
//     this.favoriteSubject = favoriteSubject
//   }
// }

// let student1 = new Student('Jack Doe', 18, 'jackdoe@gmail.com', '123 West St', 3.8, 12, 'english')

// console.log(student1)
