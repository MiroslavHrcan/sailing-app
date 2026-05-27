import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-maritime-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card class="maritime-card">
      @if (icon || title) {
        <mat-card-header>
          @if (icon) {
            <mat-icon mat-card-avatar class="card-icon">{{ icon }}</mat-icon>
          }
          @if (title) {
            <mat-card-title>{{ title }}</mat-card-title>
          }
          @if (subtitle) {
            <mat-card-subtitle>{{ subtitle }}</mat-card-subtitle>
          }
        </mat-card-header>
      }
      <mat-card-content>
        <ng-content />
      </mat-card-content>
      @if (hasActions) {
        <mat-card-actions>
          <ng-content select="[card-actions]" />
        </mat-card-actions>
      }
    </mat-card>
  `,
  styles: [`
    .maritime-card {
      background: var(--card-bg, #112244);
      border: 1px solid rgba(212, 160, 23, 0.3);
      color: var(--card-text, #e8f4f8);
    }
    .card-icon {
      color: var(--color-gold);
      background: transparent;
    }
    mat-card-title {
      color: var(--color-gold);
      font-size: 1rem;
      font-weight: 600;
    }
    mat-card-subtitle {
      color: #94b4c8;
    }
  `],
})
export class MaritimeCardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() icon?: string;
  @Input() hasActions = false;
}
