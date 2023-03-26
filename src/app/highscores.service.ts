import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {

  constructor(private _http: HttpClient) { }

  load(): Observable<Array<{name: string, score: number}>>{
    const URL = 'http://scores.chrum.it/scores/snake';
    const headers = new HttpHeaders().set('accept', 'application/json')
    
    return this._http.get<Array<{name: string, score: number}>>(URL, {'headers': headers})
  }
}
