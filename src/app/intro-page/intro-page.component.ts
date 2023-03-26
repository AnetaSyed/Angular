import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
import { throwError } from 'rxjs';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  public errorAlert: boolean = false;

  constructor(private _router: Router, private _playerData: PlayerDataService) { }

  ngOnInit(): void {
  }

  public changeErrorAlert() {
    this.errorAlert = false
  }

  public submit(form: any, name: string, studentID: string) {
    this._playerData.setPlayerData(name, studentID)
    this._playerData.load(studentID).subscribe((result) => { Object.values(result)[0] === true ? this._router.navigate(['/game-page']) : this.errorAlert = true });    
}
}