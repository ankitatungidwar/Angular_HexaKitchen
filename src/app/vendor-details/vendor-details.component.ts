import { Component, OnInit } from '@angular/core';
import { VendorDetailsService } from './vendor-details.service';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
 
   vendorDetails: VendorDetails[];
   errorMsg: any;
   editVendorDetails: VendorDetails;

  constructor(public vendorDetailsService: VendorDetailsService) { }

  ngOnInit() {
    this.vendorDetailsService.getVendorDetailsItems().subscribe(
      data => this.vendorDetails = data,
      error => this.errorMsg = error
    );
  }
  delete(vendorDetails: VendorDetails): void {
    if (confirm("Are you sure to delete" + vendorDetails.name + "?"))
    {
      this.vendorDetails = this.vendorDetails.filter(n => n !== vendorDetails);
      this.vendorDetailsService.deletetVendorDetailsItems(vendorDetails.name).subscribe();
      alert("Vendor:" + vendorDetails.name + " Deleted!");
    }
  }
  edit(vendorDetails: VendorDetails)
  {
    this.editVendorDetails = vendorDetails;
  }
  update()
  {
    if(this.editVendorDetails)
    {
      this.vendorDetailsService.updatetVendorDetailsItems(this.editVendorDetails).subscribe
      (editVendorDetails => {
        const nr = editVendorDetails ? this.vendorDetails.findIndex(n=> n.name === editVendorDetails.name) : -1;
        if(nr > -1){
          this.vendorDetails[nr] = editVendorDetails;
        }
      });
      this.editVendorDetails = undefined;
    }
  }

}
