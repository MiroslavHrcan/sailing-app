import { Pipe, PipeTransform } from '@angular/core';

const BEAUFORT: { max: number; label: string }[] = [
  { max: 1,  label: '0 – Calm' },
  { max: 3,  label: '1 – Light air' },
  { max: 6,  label: '2 – Light breeze' },
  { max: 10, label: '3 – Gentle breeze' },
  { max: 16, label: '4 – Moderate breeze' },
  { max: 21, label: '5 – Fresh breeze' },
  { max: 27, label: '6 – Strong breeze' },
  { max: 33, label: '7 – Near gale' },
  { max: 40, label: '8 – Gale' },
  { max: 47, label: '9 – Strong gale' },
  { max: 55, label: '10 – Storm' },
  { max: 63, label: '11 – Violent storm' },
  { max: Infinity, label: '12 – Hurricane' },
];

@Pipe({ name: 'beaufort', standalone: true })
export class BeaufortPipe implements PipeTransform {
  transform(knots: number): string {
    const entry = BEAUFORT.find(b => knots <= b.max);
    return entry ? entry.label : '12 – Hurricane';
  }
}
