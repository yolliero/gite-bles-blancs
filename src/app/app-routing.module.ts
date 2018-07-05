import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GiteComponent } from './pages/gite/gite.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'gite',      component: GiteComponent },
  { path: 'activities',      component: ActivitiesComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
