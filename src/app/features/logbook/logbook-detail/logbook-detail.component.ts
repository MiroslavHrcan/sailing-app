import { Component, inject, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LogbookService } from '../../../core/services/logbook.service';
import { LogbookEntry, SEA_STATE_LABELS, VISIBILITY_LABELS } from '../../../core/models/logbook-entry.model';
import { BeaufortPipe } from '../../../shared/pipes/beaufort.pipe';
import { SeaStatePipe } from '../../../shared/pipes/sea-state.pipe';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-logbook-detail',
  standalone: true,
  imports: [
    MatButtonModule, MatIconModule, MatDividerModule,
    MatChipsModule, MatDialogModule, MatSnackBarModule,
    BeaufortPipe, SeaStatePipe,
  ],
  templateUrl: './logbook-detail.component.html',
  styleUrl: './logbook-detail.component.scss',
})
export class LogbookDetailComponent implements OnInit {
  @Input() id!: string;

  private logbookService = inject(LogbookService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  entry?: LogbookEntry;

  ngOnInit(): void {
    this.entry = this.logbookService.getById(this.id);
    if (!this.entry) {
      this.snackBar.open('Entry not found', 'Dismiss', { duration: 3000 });
      this.router.navigate(['/logbook']);
    }
  }

  edit(): void {
    this.router.navigate(['/logbook', this.id, 'edit']);
  }

  delete(): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Log Entry',
        message: `Delete entry from ${this.entry?.date}? This cannot be undone.`,
      },
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.logbookService.delete(this.id);
        this.snackBar.open('Entry deleted', 'Dismiss', { duration: 3000 });
        this.router.navigate(['/logbook']);
      }
    });
  }

  back(): void {
    this.router.navigate(['/logbook']);
  }

  formatCoord(lat: number, lon: number): string {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lonDir = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lon).toFixed(4)}°${lonDir}`;
  }
}
