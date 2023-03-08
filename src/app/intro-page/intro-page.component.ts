import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  constructor(private _router: Router, private _playerData: PlayerDataService) { }

  ngOnInit(): void {
  }

  public submit(form: any, name: string, email: string) {
    this._playerData.setPlayerData(name, email)
    this._router.navigate(['/game-page'])    
}
}