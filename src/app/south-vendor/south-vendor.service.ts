import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouthVendorService {

  constructor(public httpClient : HttpClient) { 

  }

  getSouthItems(): Observable<SouthVendor[]>
  {
    let url = "./assets/data/South.json";
    return this.httpClient.get<SouthVendor[]>(url)
  }

  deleteSouthItem(id : number) : Observable<{}>
  {
    let url = "./assets/data/South.json";
    const deleteurl = `${url}/${id}`;
    return this.httpClient.delete(deleteurl);
  }

  updateSouthItem(southVendor: SouthVendor): Observable<SouthVendor> {
    let url ="./assets/data/South.json";  
    return this.httpClient.put<SouthVendor>(url, southVendor);
  }
}
