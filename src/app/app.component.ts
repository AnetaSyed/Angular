import { Component } from '@angular/core';
export interface PlayerData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Snake Game';
  public name: string;
  public playersHistory: Array<PlayerData> = [];

  constructor() {}

  public onPlayerDataReady(playersHistory: PlayerData) {
    this.playersHistory.unshift({
      name: playersHistory.name,
      email: playersHistory.email
    })
    this.name = this.playersHistory[0].name
  }

  public goToIntroPage() {
    this.name = "";
  }
  
}
