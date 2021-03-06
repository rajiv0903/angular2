import { Component, OnInit } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DataStorageService } from '../../shared/data-storage.service';
import * as appState from '../../store/app.reducers';
import * as authState from '../../auth/store/auth.reducers';
import * as authActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  authState:Observable<authState.State>;

  constructor(private dataStorageService: DataStorageService,
              private store: Store<appState.AppState>) {
  }

  ngOnInit(){
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    //this.authService.logout();
    this.store.dispatch(new authActions.Logout());
  }
}
