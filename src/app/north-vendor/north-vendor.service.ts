import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NorthVendorService {

  constructor(private httpClient: HttpClient) { }

  getNorthIndianItems(): Observable<NorthVendor[]> {   
    let url ="./assets/data/NorthIndian.json";        
    return this.httpClient.get<NorthVendor[]>(url);    
  } 

  // addNorthIndianItem(northVendor: NorthVendor): Observable<NorthVendor> {
  //   //let url ="http://localhost:8080/ftp11-0.0.1-SNAPSHOT/api/xxx/xxx/";  
  //   let url ="./assets/data/NorthIndian.json"; 
  //   return this.httpClient.post<NorthVendor>(url, northVendor);
  // }
  
  deleteNorthIndianItem(id: number): Observable<{}> {
    let url ="./assets/data/NorthIndian.json";  
    const deleteUrl = `${url}/${id}`;     
    return this.httpClient.delete(deleteUrl);         
  }

  updateNorthIndianItem(northVendor: NorthVendor): Observable<NorthVendor> {
    let url ="./assets/data/NorthIndian.json";  
    return this.httpClient.put<NorthVendor>(url, northVendor);
  }

  /* GET items whose name contains search term */
  // searchNorthIndianItem(term: string): Observable<NorthVendor[]> {
  //   let url ="./assets/data/NorthIndian.json"; 
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};    

  //   return this.httpClient.get<NorthVendor[]>(url, options).pipe();
      
  // }



}
