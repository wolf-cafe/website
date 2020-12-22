import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'lobby'
  },
  {
    path: 'lobby',
    component: GamesComponent,
    children: [
      // {
      //   path: 'among-us',
      //   component: AmongUsContainerComponent
      // }
      {
        path: '**',
        redirectTo: 'games',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
