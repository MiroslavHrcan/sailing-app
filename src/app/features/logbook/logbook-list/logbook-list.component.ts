import { Component, inject, ViewChild, OnInit, signal, computed } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogbookService } from '../../../core/services/logbook.service';
import { TripService } from '../../../core/services/trip.service';
import { LogbookEntry } from '../../../core/models/logbook-entry.model';
import { BeaufortPipe } from '../../../shared/pipes/beaufort.pipe';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-logbook-list',
  standalone: true,
  imports: [
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatSnackBarModule, MatDialogModule, MatTooltipModule,
    BeaufortPipe,
  ],
  templateUrl: './logbook-list.component.html',
  styleUrl: './logbook-list.component.scss',
})
export class LogbookListComponent implements OnInit {
  private logbookService = inject(LogbookService);
  private tripService = inject(TripService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['date', 'departure', 'arrival', 'officer', 'wind', 'speed', 'actions'];
  dataSource = new MatTableDataSource<LogbookEntry>([]);

  readonly selectedTripId = signal<string | null>(null);
  readonly trips = computed(() => [...this.tripService.trips()].sort((a, b) => b.year - a.year));

  ngOnInit(): void {
    // Support ?tripId= query param from Trips page
    const tripId = this.route.snapshot.queryParamMap.get('tripId');
    if (tripId) this.selectedTripId.set(tripId);
    this.refreshTable();
  }

  onTripFilter(tripId: string | null): void {
    this.selectedTripId.set(tripId);
    this.refreshTable();
  }

  private refreshTable(): void {
    const tripId = this.selectedTripId();
    const all = this.logbookService.sortedEntries();
    this.dataSource.data = tripId ? all.filter(e => e.tripId === tripId) : all;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEntry(entry: LogbookEntry): void {
    this.router.navigate(['/logbook', entry.id]);
  }

  newEntry(): void {
    this.router.navigate(['/logbook/new']);
  }

  editEntry(entry: LogbookEntry, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/logbook', entry.id, 'edit']);
  }

  deleteEntry(entry: LogbookEntry, event: Event): void {
    event.stopPropagation();
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Log Entry',
        message: `Delete entry from ${entry.date} at ${entry.time}? This cannot be undone.`,
      },
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.logbookService.delete(entry.id);
        this.dataSource.data = this.logbookService.sortedEntries();
        this.snackBar.open('Entry deleted', 'Dismiss', { duration: 3000 });
      }
    });
  }

  exportJson(): void {
    this.logbookService.exportToJson();
  }

  importJson(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.logbookService.importFromJson(file).then(result => {
      this.dataSource.data = this.logbookService.sortedEntries();
      this.snackBar.open(
        `Imported ${result.imported} entries${result.errors.length ? ` (${result.errors.length} errors)` : ''}`,
        'Dismiss',
        { duration: 4000 }
      );
    }).catch(err => {
      this.snackBar.open(`Import failed: ${err.message}`, 'Dismiss', { duration: 5000 });
    });
    (event.target as HTMLInputElement).value = '';
  }
}
