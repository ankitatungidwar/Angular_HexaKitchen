import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private httpClient: HttpClient) { }
  getEmployeeDetailsItems(): Observable<EmployeeDetails[]> {
    let url = "./assets/data/EmployeeDetails.json";
    return this.httpClient.get<EmployeeDetails[]>(url);
  }
  deletetEmployeeDetailsItems(name: string): Observable<{}> {
    let url = "./assets/data/EmployeeDetails.json";
    const deleteUrl = `${url}/${name}`;
    return this.httpClient.delete(deleteUrl);
  }
  updatetEmployeerDetailsItems(employeeDetails: EmployeeDetails): Observable<EmployeeDetails>
  {
    let url = "./assets/data/EmployeeDetails.json";
    return this.httpClient.put<EmployeeDetails>(url, employeeDetails);

  }
}
