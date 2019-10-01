import { Component, OnInit } from '@angular/core';
import { SouthVendorService } from './south-vendor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-south-vendor',
  templateUrl: './south-vendor.component.html',
  styleUrls: ['./south-vendor.component.css']
})
export class SouthVendorComponent implements OnInit {

  southVendors: SouthVendor[];
  errorMsg : any;
  editSouthItem: SouthVendor;

  constructor(public southService : SouthVendorService) { }

  ngOnInit() {
    this.southService.getSouthItems().subscribe(
      data => this.southVendors = data,
      error => this.errorMsg = error
    );
  }

<<<<<<< Updated upstream
  add(addForm: NgForm): void {
    this.editSouthItem = undefined;
    // name = name.trim();    
    if (!addForm.value.name) {
      return;
    }

    if (!addForm.value.price) {
      return;
    }

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);
        
    this.southVendors.push(addForm.value);
    console.log(this.southVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");  
    addForm.resetForm();      
  }

  delete(southVendor : SouthVendor) : void
  {
    if(confirm("Are you sure to delete "+ southVendor.name + "?")) {
=======
  delete(southVendor : SouthVendor) : void
  {
    if(confirm("Are you sure to delete "+southVendor.name + "?")) {
>>>>>>> Stashed changes

    this.southVendors = this.southVendors.filter(s => s !== southVendor);
    this.southService.deleteSouthItem(southVendor.id).subscribe();
    alert("Menu Item: " + southVendor.name + " Deleted!"); 
    }
  }

  edit(southVendor : SouthVendor)
  {
    this.editSouthItem = southVendor;
  }

  update() {
    if (this.editSouthItem) {
      this.southService.updateSouthItem(this.editSouthItem).subscribe
        (editSouthItem => {
          const nr = editSouthItem ? this.southVendors.findIndex(n => n.id === editSouthItem.id) : -1;
          if (nr > -1) {
            this.southVendors[nr] = editSouthItem;
          }
        });
      this.editSouthItem = undefined;
    }
  }

  
}
