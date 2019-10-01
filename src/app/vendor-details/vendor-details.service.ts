import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorDetailsService {

  constructor(private httpClient: HttpClient) { }
  getVendorDetailsItems(): Observable<VendorDetails[]> {
    let url = "./assets/data/VendorDetails.json";
    return this.httpClient.get<VendorDetails[]>(url);
  }
  deletetVendorDetailsItems(name: string): Observable<{}> {
    let url = "./assets/data/VendorDetails.json";
    const deleteUrl = `${url}/${name}`;
    return this.httpClient.delete(deleteUrl);
  }
  updatetVendorDetailsItems(vendorDetails: VendorDetails): Observable<VendorDetails>
  {
    let url = "./assets/data/VendorDetails.json";
    return this.httpClient.put<VendorDetails>(url, vendorDetails);

  }

}
