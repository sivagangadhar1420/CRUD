import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BluePrintModel } from '../blue-print-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addTodos:EventEmitter<any>= new EventEmitter();
  
  userId:string=""
  id:string="";
  title:string="";
  completed:Boolean;
  onSubmit(){
    let itms={userId:this.userId, id:this.id, title:this.title,completed:this.completed}
    this.addTodos.emit(itms);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
