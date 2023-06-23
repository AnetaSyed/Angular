import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HighscoresComponent } from './highscores/highscores.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MyScoresComponent } from './my-scores/my-scores.component'

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe,
    HighscoresComponent,
    UserFormComponent,
    MyScoresComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot ([
      {path: 'intro-page', component: IntroPageComponent},
      {path: 'game-page/:color', component: GamePageComponent},
      {path: '**', redirectTo: 'intro-page'},
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
