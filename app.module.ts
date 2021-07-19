import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';import {MatAutocompleteModule} from '@angular/material/autocomplete'; import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip'; import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule, MatButtonModule,MatAutocompleteModule, MatSidenavModule, MatTooltipModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
