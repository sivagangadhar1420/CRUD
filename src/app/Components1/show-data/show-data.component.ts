import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BluePrintModel } from '../blue-print-model';


@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  @Input() inpt:BluePrintModel;
  @Output() deleteTodos:EventEmitter<BluePrintModel> =new EventEmitter();
  constructor() { }

  deleteTodo(inpt1){
    this.deleteTodos.emit(inpt1);
  }

  



  ngOnInit() {
  }

}
