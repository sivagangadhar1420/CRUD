import { Component, OnInit, Output,  EventEmitter, ViewChild } from '@angular/core';
import { BluePrintModel } from 'src/app/Components1/blue-print-model';


@Component({
  selector: 'app-adding-assets',
  templateUrl: './adding-assets.component.html',
  styleUrls: ['./adding-assets.component.css']
})
export class AddingAssetsComponent implements OnInit {
  res1:BluePrintModel[]=[];
  @Output() addingAssets:EventEmitter<any>=new EventEmitter();
  @ViewChild('fnForm', {static:false}) fnForm:any;

  
  userId:string="";
  id:string="";
  title:string="";
  completed:Boolean;  

  onSubmitF(){
    let itms:any={userId:this.userId, id:this.id, title:this.title,completed:this.completed};
    this.addingAssets.emit(itms);
    this.fnForm.reset();
    
  };

  constructor() { }

  ngOnInit() {
  }

}
