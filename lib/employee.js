class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getName() {
    console.log(`Employee's name: ${this.name}`);
  }

  getId() {
    console.log(`Employee's id: ${this.id}`);
  }

  getEmail() {
    console.log(`Employee's email: ${this.email}`);
  }

  getRole() {
    console.log("Employee's role: Employee");
  }
}

module.exports = Employee;
