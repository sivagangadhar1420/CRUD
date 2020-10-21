import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
  
let hopts={
  headers:new HttpHeaders({
 'Content-Type':'application/json'
})
}



@Injectable({
  providedIn: 'root'
})
export class BluePrint1Service {

  todoUrl='https://jsonplaceholder.typicode.com/todos';
  toDoLimit='?_limit=5';


 constructor(private http:HttpClient) {}
      // For TraversyMedia
    getData(){
     return this.http.get(`${this.todoUrl}${this.toDoLimit}`)
    return this.http.get(this.todoUrl);
    }

          // For SandeepSoni
          getData1():Observable<any>{
            return this.http.get(`${this.todoUrl}${this.toDoLimit}`);
          }



  }


