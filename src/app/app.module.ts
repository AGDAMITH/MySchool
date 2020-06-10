import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { TeachHomeComponent } from './screens/teachers/teach-home/teach-home.component';
import { StHomeComponent } from './screens/students/st-home/st-home.component';
import { AddStComponent } from './screens/students/add-st/add-st.component';
import { RemoveStComponent } from './screens/students/remove-st/remove-st.component';
import { SearchStComponent } from './screens/students/search-st/search-st.component';
import { StDetailsComponent } from './screens/students/st-details/st-details.component';
import { AddTeachComponent } from './screens/teachers/add-teach/add-teach.component';
import { RemoveTeachComponent } from './screens/teachers/remove-teach/remove-teach.component';
import { SearchTeachComponent } from './screens/teachers/search-teach/search-teach.component';
import { TeachDetailsComponent } from './screens/teachers/teach-details/teach-details.component';
import { NavbarComponent } from './screens/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeachHomeComponent,
    StHomeComponent,
    AddStComponent,
    RemoveStComponent,
    SearchStComponent,
    StDetailsComponent,
    AddTeachComponent,
    RemoveTeachComponent,
    SearchTeachComponent,
    TeachDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
