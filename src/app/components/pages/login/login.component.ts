import { Component, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',Validators.required]
  })

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private messageService:MessageService){}

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    const {email, password} = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password){
          sessionStorage.setItem('email', email as string);
          this.authService.setLogInStatus(true);
          this.router.navigate(['/home']);
        }
        else{
          this.messageService.add({severity:'error', summary:'Error', detail:'Email or password is wrong'});
        }
      },
      error => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Something went wrong'});
      }
    )
  }
}
