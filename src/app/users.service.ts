import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users';
import { Customers } from './customers';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Plans } from './plans';
import { Routerdetails } from './routerdetails';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private baseURL = "http://localhost:8080/api/v1/users";
  private baseURL = "http://localhost:8080/api/v1/";
  private userlink = "users";
  private signuplink = "signup";
  private preparesignup = "signup1"
  private otplink = "otp";
  private otpcheckforforgotpwd = "otpcheck";
  private changepwd = "changepwd";
  private profilelink = "profile";
  private CustomerURL = "http://localhost:8080/api/v1/customers";
  private forgotlink = "forgotPassword";
  private getplanspage = "getplans"
  private getrouter = "getrouter"
  private UpdateRouter = "updateRouter";
  private connected = "getconnecteddevices";
  private blocked = "getblockeddevices";

  constructor(private httpClient : HttpClient, private toast:ToastrService) { 
  }

  loginUser(users:Users):Observable<String>{
    //console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.userlink,users,{responseType: 'text'});
  }


  CustomerValidation(customers:Customers):Observable<String>{
   //console.log(customers)
   return this.httpClient.post(`${this.CustomerURL}`,customers,{responseType: 'text'}); 
  }

  Changepwd(users:Users):Observable<String>{
    //console.log(customers)
    return this.httpClient.post(`${this.baseURL}`+this.changepwd,users,{responseType: 'text'}); 
   }


  CustomerSignup(users:Users):Observable<String>{
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.signuplink,users,{responseType: 'text'});
  }

  CustomersOTP(users:Users):Observable<String>{
    console.log('hello by otp observ');
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.otplink,users,{responseType: 'text'});
  }

  Checkotpforforgotpwd(users:Users):Observable<String>{
    console.log('hello by otp observ');
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.otpcheckforforgotpwd,users,{responseType: 'text'});
  }

  ProfilePage(users:Users):Observable<Users>{
    return this.httpClient.post<Users>(`${this.baseURL}`+this.profilelink,users);
  }

  SetRegpage(customers:Customers):Observable<Customers>
  {
    return this.httpClient.post<Customers>(`${this.baseURL}`+this.preparesignup,customers);
  }

  forgot(user:Users):Observable<String>
  {
    return this.httpClient.post(`${this.baseURL}`+this.forgotlink,user,{responseType: 'text'});
  }

  getPlans(customer:Customers):Observable<Plans[]>
  {
    return this.httpClient.post<Plans[]>(`${this.baseURL}`+this.getplanspage,customer);
  }

  getRouterDetails(customer:Customers):Observable<Routerdetails[]>{  
    //get router details
    return this.httpClient.post<Routerdetails[]>(`${this.baseURL}`+this.getrouter,customer);
  }

  // UpdateRouterDetails(router:Routerdetails,serialNumber:String){
  //   console.log('hello by router update')
  //   console.log(`${this.baseURL}`+serialNumber)
  //   console.log(router.password)
  //   return this.httpClient.put('${this.baseURL}'+'${serialNumber}',router)
  // }


  UpdateRouterDetails(router:Routerdetails){  
    //get router details
    console.log('hello by router update')
    console.log(router.password)
    return this.httpClient.post(`${this.baseURL}`+this.UpdateRouter,router);
  }

  
  getconnectedDetails(router:Routerdetails):Observable<Routerdetails[]>{  
    //get router details
    return this.httpClient.post<Routerdetails[]>(`${this.baseURL}`+this.connected,router);
  }

  getblocked(router:Routerdetails):Observable<Routerdetails[]>{  
    //get router details
    return this.httpClient.post<Routerdetails[]>(`${this.baseURL}`+this.blocked,router);
  }



  Showsuccess(title:any, message:any)
  {
    this.toast.success(message, title,{
    })
  }
  Showerror(title:any, message:any)
  {
    this.toast.error(message, title)
  }
  Showwarning(title:any, message:any)
  {
    this.toast.warning(message, title,{
      easing:'ease-in',
    })
  }
  Showinfo(title:any, message:any)
  {
    this.toast.info(message, title,{
      easing:'ease-in'
    })
  }



}
