import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BluePrintModel } from '../Components1/blue-print-model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

let hopts={
  headers:new HttpHeaders({
 'Content-Type':'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class SecondSService {
toDoUrl='https://jsonplaceholder.typicode.com/todos';
toDoLimit='?_limit=5';
constructor(private http:HttpClient) { }

getEmployees():Observable<BluePrintModel[]>{
  return this.http.get<BluePrintModel[]>(`${this.toDoUrl}${this.toDoLimit}`)
  .pipe(retry(3), 
  catchError(this.handleError)
  )}
  
  addingTodo(res:BluePrintModel):Observable<BluePrintModel>{
    return this.http.post<BluePrintModel>(this.toDoUrl, res);
  }
  
  handleError(error:HttpErrorResponse){
    return throwError("Plz Wait ... somethingh Went Wrong  ::: (((  " )
  }

  
  



}
