import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Observable, Subscription } from 'rxjs';

import { MeowFactsService } from '../../../app/data-access/meowfacts/meow-facts.service';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsListComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  facts$?: Observable<(string | never)[]>;
  factsSubject = new BehaviorSubject<string[]>([]);

  constructor(
    private readonly _meowFactsService: MeowFactsService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  private _subscription = new Subscription();

  ngOnInit(): void {
    this.facts$ = this.factsSubject.asObservable();
    this.getFactsBatch();
    this._subscription.add(
      fromEvent(window, 'scroll')
        .pipe(debounceTime(100))
        .subscribe(() => {
          this.onWindowScroll();
        })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onWindowScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.getFactsBatch();
    }
  }

  private getFactsBatch(): void {
    this.setLoadingState(true);
    this._meowFactsService.getFacts().subscribe((facts) => {
      this.setLoadingState(false);

      this.factsSubject.next(
        this.distinct(this.factsSubject.getValue().concat(facts))
      );
    });
  }

  private setLoadingState(value: boolean): void {
    this.loading = value;
    this._changeDetectorRef.markForCheck();
  }

  private distinct(data: string[]): string[] {
    return data.filter(
      (value, index, array) => array.findIndex((t) => t === value) === index
    );
  }
}
