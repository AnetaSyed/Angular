import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private _playerName: string;
  private _playerID: string;

  constructor (private _http: HttpClient) {  }

  public setPlayerData(name: string, ID: string) {
    this._playerName = name;
    this._playerID = ID;
  }

  public readPlayerName() {
    return this._playerName;
  }

  public readPlayerID() {
    return this._playerID
  }

  public load(id: string) {
    const URL = 'http://scores.chrum.it/check-token';
    let TOKEN = id.toString()

    if (!TOKEN) {
      alert("This operation requires a token");
    }

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json',
    })

    const data = JSON.stringify({
      "auth-token": id
    })

    const options = { headers }

    return this._http.post(URL, data, options)
  }
}
