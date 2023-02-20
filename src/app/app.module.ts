import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BattleResultsComponent } from './battle-results/battle-results.component';
import { ResultsDatabaseComponent } from './results-database/results-database.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    BattlePageComponent,
    NavbarComponent,
    ResultPageComponent,
    NotFoundPageComponent,
    BattleResultsComponent,
    ResultsDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'battle', component: BattlePageComponent },
      { path: 'result', component: ResultPageComponent },
      { path: '**', component: NotFoundPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
