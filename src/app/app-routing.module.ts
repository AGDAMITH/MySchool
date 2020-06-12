import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StHomeComponent } from './screens/students/st-home/st-home.component';
import { HomeComponent } from './screens/home/home.component';
import { TeachHomeComponent } from './screens/teachers/teach-home/teach-home.component';
import { AboutComponent } from './screens/about/about.component';
import { AddStComponent } from './screens/students/add-st/add-st.component';
import { RemoveStComponent } from './screens/students/remove-st/remove-st.component';
import { SearchStComponent } from './screens/students/search-st/search-st.component';
import { StDetailsComponent } from './screens/students/st-details/st-details.component';
import { AddTeachComponent } from './screens/teachers/add-teach/add-teach.component';
import { RemoveTeachComponent } from './screens/teachers/remove-teach/remove-teach.component';
import { SearchTeachComponent } from './screens/teachers/search-teach/search-teach.component';
import { TeachDetailsComponent } from './screens/teachers/teach-details/teach-details.component';


const routes: Routes = [
  { path: 'sthome', component: StHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teachhome', component: TeachHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addst', component: AddStComponent },  
  { path: 'removest', component: RemoveStComponent },
  { path: 'searchst', component: SearchStComponent },
  { path: 'stdetails', component: StDetailsComponent },
  { path: 'addteach', component: AddTeachComponent },
  { path: 'removeteach', component: RemoveTeachComponent },
  { path: 'searchteach', component: SearchTeachComponent },
  { path: 'teachdetails', component: TeachDetailsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }