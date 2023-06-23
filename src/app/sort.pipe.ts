import { Pipe, PipeTransform } from '@angular/core';
import { GameActions } from './game-page/game-page.component';

@Pipe({
  name: 'sort'
})

// export class SortPipe implements PipeTransform {
//   transform(values: GameActions[], dir = "asc"): GameActions[] {
    
//     return values.sort((a, b) => {
//       if (dir === "asc") {
//         return a["time"] - b["time"];
//       }
//       return b["time"] - a["time"];
//     });
//   }
// }

export class SortPipe implements PipeTransform {
  transform(value: any, field: any,  dir = "asc") {
  
      if (typeof value[0] === 'number') {
        return value.sort((a: any, b: any) => {
          if (dir === "asc") {
                return a - b
              }
                return b - a;
          })
      } else if (typeof value[0] === 'object') {
       return value.sort((a: any, b: any) => {
        if (dir === "asc") {
              return a[field] - b[field]
            }
              return b[field] - a[field];
          });
      }
  
  }
}