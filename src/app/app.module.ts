import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { DataTableModule } from "ng2-data-table";
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { HomeComponent } from './components/home/home.component';
import { HPPComponent } from './components/hpp/hpp.component';
import { TwitterComponent } from './components/twitter/twitter.component';

import {FormsModule} from '@angular/forms'
const routes:Routes =[

{path:'',component:HomeComponent},
{path: 'info',component:InfoComponent},
{path:'page1',component:Page1Component},
{path:'hpp',component:HPPComponent},
{path:'twitter',component:TwitterComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    Page1Component,
    HomeComponent,
    HPPComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TwitterComponent,HPPComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
