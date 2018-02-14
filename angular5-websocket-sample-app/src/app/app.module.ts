import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Client1Component } from './client-1/client-1.component';
import { Client2Component } from './client-2/client-2.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'client-1', component: Client1Component },
  { path: 'client-2', component: Client2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Client1Component,
    Client2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
