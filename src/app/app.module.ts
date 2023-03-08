import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot ([
      {path: 'intro-page', component: IntroPageComponent},
      {path: 'game-page', component: GamePageComponent},
      {path: '**', redirectTo: 'intro-page'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
