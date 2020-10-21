import { Component, OnInit } from '@angular/core';
import { BluePrint1Service } from 'src/app/Services/blue-print1.service';
import { GetServiceService } from '../get-service.service';
import { BluePrintModel } from '../blue-print-model';

@Component({
  selector: 'app-bs',
  providers:[BluePrint1Service, GetServiceService],
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BSComponent implements OnInit {
  resultData:BluePrintModel[];
  
  getData(){
    return this.ss.getData1().subscribe((pl)=>{
      console.log("Data of Pl is", pl);
    })
  }
  result:any="";
  getMany(){
    return this.ss1.getDetails().subscribe((mk)=>{
      console.log("Adding Details", mk);
      this.result = mk;
      this.resultData = this.result;
    })
  }
  addingTodos(fm:BluePrintModel){
   this.resultData.push(fm);
  return this.ss1.addtoServer(fm).subscribe();
  }

 deleteItms(res1:BluePrintModel){
    // removing From UI
   this.resultData = this.resultData.filter(t => t.id !== res1.id);
    // console.log("Deleting");

    // Removing From Server
    return this.ss1.deleteServerItems(res1).subscribe();
  }

  constructor(private ss:BluePrint1Service, private ss1:GetServiceService) { }
    ngOnInit() {
    this.getData();
    this.getMany();
  }

}
