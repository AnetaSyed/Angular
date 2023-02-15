import { Pipe, PipeTransform } from '@angular/core';
import { GameActions } from './game-page/game-page.component';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(values: GameActions[], dir = "asc"): GameActions[] {
    
    return values.sort((a, b) => {
      if (dir === "asc") {
        return a["time"] - b["time"];
      }
      return b["time"] - a["time"];
    });
  }
}

