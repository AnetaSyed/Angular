import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private _playerName: string;
  private _playerEmail: string;

  public setPlayerData(name: string, email: string) {
    this._playerName = name;
    this._playerEmail = email;
  }

  public readPlayerName() {
    return this._playerName;
  }

}
