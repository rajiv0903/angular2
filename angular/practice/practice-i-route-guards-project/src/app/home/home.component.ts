import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  //Programitacally naviagation
  onLoadServers(id: number): void{
    // this.router.navigate(['/servers']);
    this.router.navigate(['/servers', id, 'edit'], 
                      {queryParams: 
                          {allowEdit: '1'},
                          fragment: 'loading'
                      }); //with param and fragments
  }

  onLogin():void {
    this.authService.login();
  }

  onLogout():void {
    this.authService.logout();
  }

}
