import { Pipe, PipeTransform } from '@angular/core';
import { SeaState, SEA_STATE_LABELS } from '../../core/models/logbook-entry.model';

@Pipe({ name: 'seaState', standalone: true })
export class SeaStatePipe implements PipeTransform {
  transform(value: SeaState): string {
    return SEA_STATE_LABELS[value] ?? value;
  }
}
