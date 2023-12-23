import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  getallarray:any[]=[]
     constructor(private http:DoctorService){}
        ngOnInit(): void {
            this.getallappoints()
        }

        getallappoints(){
           this.http.getallappoints().subscribe((res:any)=>{
            this.getallarray=res.data
  
           })
        }

        gettodayallappoints(){
           this.http.gettodayallappoints().subscribe((res:any)=>{
            this.getallarray=res.data
  
           })
        }
        markapp(appointId:any){
          return this.http.markappointe(appointId).subscribe((res:any)=>{
              this.gettodayallappoints()
          })
        }
}
