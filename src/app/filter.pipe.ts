import { Pipe, PipeTransform } from '@angular/core';
import { GameActions } from './game-page/game-page.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: GameActions[], actionToFilterBy: string) {
    if (actionToFilterBy === 'All') {
      return value;
    }
    
      return value.filter((item: GameActions) => {
      if(item.action === actionToFilterBy) {
        return true
      }
      return false
    })
  }
  }
