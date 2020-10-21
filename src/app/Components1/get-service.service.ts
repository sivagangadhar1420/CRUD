import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BluePrintModel } from './blue-print-model';

let hopts={
  headers:new HttpHeaders({
 'Content-Type':'application/json'
})
}


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  
  todoUrl='https://jsonplaceholder.typicode.com/todos';
  toDoLimit='?_limit=5';

  getDetails():Observable<BluePrintModel>{
    return this.http.get<BluePrintModel>(`${this.todoUrl}${this.toDoLimit}`);
  }
  addtoServer(fm:BluePrintModel):Observable<BluePrintModel>{
    return this.http.post<BluePrintModel>(this.todoUrl, fm,hopts);
    
  }
  
    deleteServerItems(fm:BluePrintModel):Observable<BluePrintModel>{
      let url=`${this.todoUrl}/${fm.id}`;
      return this.http.delete<BluePrintModel>(url, hopts);
      

  }

 constructor(private http:HttpClient) { }
}
