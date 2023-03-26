import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private _http: HttpClient ) { }

  load(playerScore: object, token: string){
    const URL = 'http://scores.chrum.it/scores';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'auth-token' : token
    })

    const data = JSON.stringify(playerScore)

    const options = { headers }

    return this._http.post(URL, data, options)
  }
}
