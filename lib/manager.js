const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    super.getRole();
    console.log(`Employee's role: Manager`);
  }
}
