import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PlayerDataService } from '../player-data.service';
export interface GameActions {
  action: string;
  time: number;
}

enum Actions {
  Start = "Start",
  Stop =  "Poused",
  Reset = "End",
  Left = "Left",
  Up = "Up",
  Right = "Right",
  Down = "Down",
  End = "Game Over",
  FoodEaten = "Growe",
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public playerName: string
  public gameStatus: string = "Press START and lets play!";
  public points: number = 0;
  public time: number = 0;
  public timer: any;
  public enabledButtons: boolean = true;
  public gameHistory: Array<GameActions> = [];
  public sortDirection: string = "asc";
  public filterValue: string = "All";
  public actionsOptions: Array<string> = ["All", "Start", "Poused", "End", "Left", "Up", "Right", "Down", "Game Over", "Growe"]

  constructor(private _router: Router, private _playerData: PlayerDataService) { 
    this.playerName = this._playerData.readPlayerName()
  }

  ngOnInit(): void {
  }

  public startAndCountdown() {
    console.log(this.timer)
    this.gameStatus = "Game started!"
    this.timer = setInterval(() => {
      this.time++
    }, 1000)
    this.generateGameActionsObj(Actions.Start)
  }

  public stopGameAndTimer() {
    this.gameStatus = "Game stopped!"
    clearInterval(this.timer)
    this.generateGameActionsObj(Actions.Stop)
  }

  public resetGameAndTimer() {
    this.endGame(Actions.Reset, true)
  }

  public pointsCounter() {
    this.points++
    this.generateGameActionsObj(Actions.FoodEaten)
  }

  public addRightAction() {
    this.generateGameActionsObj(Actions.Right)
  }

  public addLeftAction() {
    this.generateGameActionsObj(Actions.Left)
  }

  public addUpAction() {
    this.generateGameActionsObj(Actions.Up)
  }

  public addDownAction() {
    this.generateGameActionsObj(Actions.Down)
  }
  
  public gameOver() {
    this.endGame(Actions.End, false)

  }

  public goToIntroPage() {
    this._router.navigate(['/intro-page'])
  }

  private endGame(action: Actions, active: boolean) {
    this.gameStatus = "Press Start and lets play!"
    this.points = 0
    this.generateGameActionsObj(action)
    this.enabledButtons = active  
    clearInterval(this.timer)
    this.time = 0 
  } 

  private generateGameActionsObj(action: Actions) {
     this.gameHistory = [...this.gameHistory, 
      {
        action: action,
        time: this.time,
      }
    ]
  }

} 