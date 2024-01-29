import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent{
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',Validators.required]
  })

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private messageService:MessageService){}

    selectedContent: string | null = null;

  loadContent(contentType: string): void {
    this.selectedContent = contentType;
  }
}
