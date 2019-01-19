import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlecturesComponent } from './watchlectures/watchlectures.component';
import { UploadvidsComponent } from './uploadvids/uploadvids.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HomeComponent } from './home/home.component';
import { WatchocobComponent } from './watchocob/watchocob.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'howitworks', component: HowitworksComponent},
  { path: 'watchlectures', component: WatchlecturesComponent},
  { path: 'uploadvids', component: UploadvidsComponent},
  { path: 'watchocob', component: WatchocobComponent},
  { path: 'contribute', component: ContributeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
