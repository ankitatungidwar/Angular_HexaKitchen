import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeMenu } from './employeemenu';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeMenu : EmployeeMenu[];
  errorMsg : any;
  list: EmployeeMenu[] = [];
  total: number = 0.0;
  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllMenu().subscribe(
      data => this.employeeMenu = data,
      error => this.errorMsg = error
    );
    }

    details(emp: EmployeeMenu)
    {            
      if(this.list.length == 0)
      {
        this.list.push(emp);
        this.total += Math.round(emp.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list)
        {
          if(emp.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list.push(emp);
            this.total += Math.round(emp.price);  
          }
      }    
    }

    deleteItem(emp2 : EmployeeMenu)
    {
      this.total -= Math.round(emp2.price);
      this.list = this.list.filter(l => l!== emp2);
    }

}
