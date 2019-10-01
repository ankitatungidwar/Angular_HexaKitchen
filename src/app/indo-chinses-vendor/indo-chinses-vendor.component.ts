import { Component, OnInit } from '@angular/core';
import { IndoChinsesVendorService } from './indo-chinses-vendor.service';
<<<<<<< HEAD
=======
import { NgForm } from '@angular/forms';
>>>>>>> 0de14c93d06ed0690d10d13241da8b5922585db2

@Component({
  selector: 'app-indo-chinses-vendor',
  templateUrl: './indo-chinses-vendor.component.html',
  styleUrls: ['./indo-chinses-vendor.component.css']
})
export class IndoChinsesVendorComponent implements OnInit {

<<<<<<< HEAD


  indoVendor: IndoVendor[];
  errorMsg: any;
  editIndoItem: IndoVendor[];
=======
  indoVendors: IndoVendor[];
  errorMsg: any;
  editIndoItem: IndoVendor;
>>>>>>> 0de14c93d06ed0690d10d13241da8b5922585db2

  constructor(public indoVendorService: IndoChinsesVendorService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.IndoChinsesVendorService.getIndoChinsesItems().subscribe(
      data => this.indoVendor = data,
      error => this.errorMsg = error
    );
=======
    this.indoVendorService.getIndoChinsesIndianItems().subscribe(
      data => this.indoVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editIndoItem = undefined;
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
        
    this.indoVendors.push(addForm.value);
    console.log(this.indoVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");  
    addForm.resetForm();      
  }

  delete(indoVendor: IndoVendor): void {
    if(confirm("Are you sure to delete " + indoVendor.name +"?"))
    {
      this.indoVendors = this.indoVendors.filter(n => n !== indoVendor);
      this.indoVendorService.deleteIndoChinsesIndianItems(indoVendor.id).subscribe();  
      alert("Menu Item: " + indoVendor.name + " Deleted!");   
    }  
>>>>>>> 0de14c93d06ed0690d10d13241da8b5922585db2
  }


  edit(indoVendor: IndoVendor)
  {
    this.editIndoItem = indoVendor;
  }

  update() {
    if (this.editIndoItem) {
      this.indoVendorService.updateIndoChinsesIndianItems(this.editIndoItem).subscribe
        (editIndoItem => {
          const nr = editIndoItem ? this.indoVendors.findIndex(n => n.id === editIndoItem.id) : -1;
          if (nr > -1) {
            this.indoVendors[nr] = editIndoItem;
          }
        });
      this.editIndoItem = undefined;
    }
  }


}
