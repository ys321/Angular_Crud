// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: Employee[] = [{
    id: 1,
    name: 'Demo',
    email: 'demo@gmail.com',
    mobile: '8855221144',
    gender: 'Male'

  }];

  constructor() { }
  getEmployees() {
    return this.employeeList
  }
  removeUser(id: number) {

    this.employeeList = this.employeeList.filter(x => x.id != id);
  }
  getUsersByID(id: number ) {
    return this.employeeList.find(x => x.id == id)
  }
  EditUser(employee:Employee) {

    const userIndex = this.employeeList.findIndex(x => x.id == employee.id);
        if (userIndex != null && userIndex != undefined) {
            this.employeeList[userIndex] = employee;
        }
  }

  // addUser(employee: Employee) {
  //   employee.id = new Date().getTime();
  //   this.employeeList.push(employee);
  // }
  // addEmployee(employee: Employee) {
  //   employee.id = new Date().getTime();
  //   this.employeeList.push(employee);
  // }

}
