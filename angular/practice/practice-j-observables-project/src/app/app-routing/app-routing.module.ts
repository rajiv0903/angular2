import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
