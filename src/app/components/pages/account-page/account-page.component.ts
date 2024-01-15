import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit{
 ngOnInit(): void {
   const localData = localStorage.getItem('signUpUsers');
   if(localData != null){
    this.signupUsers = JSON.parse(localData);
   }
 }
 signupUsers: any[] = [];
 signupObj:any = {
  userName: '',
  email: '',
  password: ''
 }

 loginObj: any = {
  userName: '',
  password: ''
 }

 onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem("signUpUsers", JSON.stringify(this.signupUsers))
  this.signupObj = {
    userName: '',
    email: '',
    password: ''
   }
 }

 onLogin(){
   const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
   if(isUserExist != undefined){
    alert('User login successfully')
   }
   else{
    alert('Wrong credentials');
   }
 }
}
