import { Component, OnInit } from '@angular/core';
import { BluePrint1Service } from 'src/app/Services/blue-print1.service';
import { BluePrintModel } from 'src/app/Components1/blue-print-model';

@Component({
  selector: 'app-todos',
  // providers:[BluePrint1Service],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {



 
  constructor(private http1:BluePrint1Service) { }
  store1:any=[];
  store:any="";

  getData(){
    return this.http1.getData().subscribe((ml)=>{
    console.log("data is ", ml);
    this.store = ml;
    this.store1=this.store;
  })
}
id:string="";
userId:string="";
title:string="";


onSubmit(){
  let res={id:this.id, userId:this.userId, title:this.title};
  this.store.push(res);
      }

  delete(ind:any){
  this.store1.splice(ind,1);
    }






      


  ngOnInit() {
    this.getData();
  }

}
