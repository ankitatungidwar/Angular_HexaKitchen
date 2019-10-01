import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from './employee-details.service';
import { compilePipeFromMetadata } from '@angular/compiler';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails: EmployeeDetails[];
  errorMsg: any;
  editEmployeeDetails: EmployeeDetails;

  constructor(public employeeDetailsServices: EmployeeDetailsService) { }
  
  ngOnInit()
   {
    this.employeeDetailsServices.getEmployeeDetailsItems().subscribe(
      data =>this.employeeDetails = data,
      error => this.errorMsg = error
    );
  }
  delete(employeeDetails: EmployeeDetails): void
  {
    if(confirm("Are you sure to delete" + employeeDetails.name + "?"))
    {
    this.employeeDetails = this.employeeDetails.filter(n => n !== employeeDetails);
    this.employeeDetailsServices.deletetEmployeeDetailsItems(employeeDetails.name).subscribe();
    alert("Employee: "+ employeeDetails.name + " Deleted!");
    }
  }
  edit(employeeDetails: EmployeeDetails)
  {
    this.editEmployeeDetails = employeeDetails;
  }
  update()
  {
    if(this.editEmployeeDetails)
    {
      this.employeeDetailsServices.updatetEmployeerDetailsItems(this.editEmployeeDetails).subscribe
      (editEmployeeDetails => {
        const nr = editEmployeeDetails ? this.employeeDetails.findIndex(n=> n.name === editEmployeeDetails.name) : -1;
        if(nr > -1){
          this.employeeDetails[nr] = editEmployeeDetails;
        }
      });
      this.editEmployeeDetails = undefined;
    }
  }

}

