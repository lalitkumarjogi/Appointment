import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
  ngOnInit(): void {
     this.getdash()
  }
  arrtlist:any[]=[]
  constructor(private http:DoctorService){}
  getdash(){
      this.http.dashboarddata().subscribe((res:any)=>{
         this.arrtlist=res.data  
      })
  }
} 
