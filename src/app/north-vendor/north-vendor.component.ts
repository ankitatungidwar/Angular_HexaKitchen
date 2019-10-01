import { Component, OnInit } from '@angular/core';
import { NorthVendorService } from './north-vendor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-north-vendor',
  templateUrl: './north-vendor.component.html',
  styleUrls: ['./north-vendor.component.css']
})
export class NorthVendorComponent implements OnInit {

  northVendors: NorthVendor[];
  errorMsg: any;
  editNorthItem: NorthVendor;

  constructor(public northVendorService: NorthVendorService) { }

  ngOnInit() {
    this.northVendorService.getNorthIndianItems().subscribe(
      data => this.northVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editNorthItem = undefined;
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
        
    this.northVendors.push(addForm.value);
    console.log(this.northVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");  
    addForm.resetForm();
    
      
  }

  delete(northVendor: NorthVendor): void {

    if(confirm("Are you sure you want to Delete: " + northVendor.name + " ? "))
    {      
      this.northVendors = this.northVendors.filter(n => n !== northVendor);
      this.northVendorService.deleteNorthIndianItem(northVendor.id).subscribe();  
      alert("Menu Item: " + northVendor.name + " Deleted!");
    }
       
  }
  

  edit(northVendor: NorthVendor)
  {
    this.editNorthItem = northVendor;
  }

  update() {
    if (this.editNorthItem) {
      this.northVendorService.updateNorthIndianItem(this.editNorthItem).subscribe
        (editNorthItem => {
          const nr = editNorthItem ? this.northVendors.findIndex(n => n.id === editNorthItem.id) : -1;
          if (nr > -1) {
            this.northVendors[nr] = editNorthItem;
          }
        });
      this.editNorthItem = undefined;
    }
  }

  // search(searchTerm: string) {
  //   this.editNorthItem = undefined;
  //   if (searchTerm) {      
  //     this.northVendorService.searchNorthIndianItem(searchTerm)        
  //       .subscribe(northVendors => (this.northVendors = northVendors));
        
  //   }
  // } 

}
