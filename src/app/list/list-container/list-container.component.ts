import { Component, OnDestroy } from '@angular/core';

import { ListService } from '../../shared/services/list.service';
import { ListElement } from '../../shared/list-element/list-element.model';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnDestroy {
  list: ListElement[] = [];

  private _destroy$ = new Subject<void>();

  constructor(private listService: ListService) {
    this.listService.initList("Normal list");

    const list$ = this.listService.list$.pipe(
      tap(list => this.list = list),
      takeUntil(this._destroy$)
    );

    [
      list$
    ].forEach((x: Observable<unknown>) => x.subscribe());
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
