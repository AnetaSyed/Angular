import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-scores',
  templateUrl: './my-scores.component.html',
  styleUrls: ['./my-scores.component.scss']
})
export class MyScoresComponent implements OnInit, OnChanges {
  @Input() public score: number;
  @Input() public playerName: string;
  public sortDirection: string = "asc";
  public scores: Array<number> = []

  constructor() {}

  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.scores.push(changes['score'].currentValue)
    }
  }
 

}

