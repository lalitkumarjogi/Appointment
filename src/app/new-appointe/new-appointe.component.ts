import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-new-appointe',
  templateUrl: './new-appointe.component.html',
  styleUrls: ['./new-appointe.component.css']
})
export class NewAppointeComponent {
  constructor(private http:DoctorService){}
  addnewapointe={
    
      "name": "",
      "mobileNo": "",
      "city": "",
      "age": 0,
      "gender": "",
      "appointmentDate": new Date(),
      "appointmentTime": "",
      "isFirstVisit": true,
      "naration": ""
    
  }
  getappointe(){
       this.http.addnewapoint(this.addnewapointe).subscribe((res:any)=>{
                if(res.result){
                   alert("Appointment Done && Appointment NO "+res.data.appointmentNo)
                }
                else{
                   alert(res.message)
                }
       })
  }

}
