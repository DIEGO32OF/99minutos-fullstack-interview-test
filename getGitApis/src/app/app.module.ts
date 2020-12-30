import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BranchesComponent } from './branches/branches.component';
import { RouterModule} from '@angular/router';
import {routing,appRoutingProviders} from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
