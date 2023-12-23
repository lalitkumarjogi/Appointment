import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  addnewapoint(obj:any){
      return this.http.post('https://freeapi.miniprojectideas.com/api/HospitalAppointment/AddNewAppointment',obj)
  }
  getallappoints(){
      return this.http.get('https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetAllAppointments')
  }
  gettodayallappoints(){
      return this.http.get('https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetTodaysAppointments')
  }
  markappointe(obj:any){
      return this.http.get(`https://freeapi.miniprojectideas.com/api/HospitalAppointment/MarkAppointmentDone?appointmentId= `+obj)
  }
  dashboarddata(){
     return this.http.get('https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetDashboardData')
  }
}
