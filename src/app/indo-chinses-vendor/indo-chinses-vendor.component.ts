import { Component, OnInit } from '@angular/core';
import { IndoChinsesVendorService } from './indo-chinses-vendor.service';

@Component({
  selector: 'app-indo-chinses-vendor',
  templateUrl: './indo-chinses-vendor.component.html',
  styleUrls: ['./indo-chinses-vendor.component.css']
})
export class IndoChinsesVendorComponent implements OnInit {



  indoVendor: IndoVendor[];
  errorMsg: any;
  editIndoItem: IndoVendor[];

  constructor(public indoVendorService: IndoChinsesVendorService) { }

  ngOnInit() {
    this.IndoChinsesVendorService.getIndoChinsesItems().subscribe(
      data => this.indoVendor = data,
      error => this.errorMsg = error
    );
  }

}
