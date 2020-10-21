import { Component, OnInit } from '@angular/core';
import{ModelPrint} from '../mdeol-print'


@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {
  res12:ModelPrint[]=[];
  
  id:any="";
  title:any="";
  index:any="";
  onsubmit(){
    if(this.title !== "")
    {
    let mt:any={id:this.id,title:this.title, isDone:false};
    this.res12.push(mt);
    }else {
        this.title = "";
      } 
    }

    //   deleteItems(fm:any){
    //      this.res12 = this.res12.filter( lm =>{ return lm.title !== fm.title
    //      });
    // }
      
    edit(fn,fn1,ind){
      this.id=fn;
      this.title=fn1;
      this.index = ind;
    }
    update(){
      for(var i=0; i< this.res12.length; i++){
        this.res12[i].id = this.id;
        this.res12[i].title = this.title;
      }
        

      

    }
    
  delete(ind:any){
    this.res12.splice(ind,1);
  }



  constructor() { }

  ngOnInit() {
  
  }

}
