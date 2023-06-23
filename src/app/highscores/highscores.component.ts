import { Component, OnInit } from '@angular/core';
import { HighscoresService } from '../highscores.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {
  public sortDirection: string = "asc";
  public highscoresData: Array<{name: string, score: number}> = []

  constructor(private _highscores: HighscoresService) {
    this._highscores.load().subscribe((result) => {
      this.highscoresData = result.sort((a, b) => b.score - a.score);
      })
   }

  ngOnInit(): void {
  }
}