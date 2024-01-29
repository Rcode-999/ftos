import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ftos';
  shouldShowHeader: boolean = true;
  constructor(private dataService:DataserviceService,
    private authService:AuthService, private router:Router){
      this.router.events.pipe(
        filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd)
      ).subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.shouldShowHeader = !['/login', '/registration'].includes(event.urlAfterRedirects);
        }
      });
    }

  ngOnInit(): void {
   
  }
  get login():boolean{
    return this.authService.getLoginStatus();
  }
}
