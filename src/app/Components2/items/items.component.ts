import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondSService } from '../second-s.service';
import { BluePrintModel } from 'src/app/Components1/blue-print-model';

@Component({
  selector: 'app-items',
  providers:[SecondSService],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    res1:BluePrintModel[]=[];
    @ViewChild('fnForm1', {static:false}) fnForm1;
    err:string;
                // Get Employees
                        getEmployees(){
                      this.ls.getEmployees().subscribe((lm)=>{
                        // console.log("Data Is", lm);
                        this.res1 = lm;
                        (er1)=> { this.err = er1;  }   
                      });  }

           userId:string="";
           id:string="";
           title:string="";
           completed:Boolean;  

          onSubmit(){
          let itms:any={userId:this.userId, id:this.id, title:this.title,completed:this.completed};
          this.res1.push(itms);
          this.fnForm1.reset();
        };
      
        addingVils(fm:BluePrintModel){
          this.res1.push(fm)
        }

        delete(ind:any){
          return this.res1.splice(ind,1);
        }
       
     constructor(private ls:SecondSService) { }
                     

  ngOnInit() {
    this.getEmployees()
  }

}
