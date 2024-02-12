import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

import { ListService } from '../../shared/services/list.service';
import { ListElement } from '../../shared/list-element/list-element.model';

@Component({
  selector: 'app-rx-list-container',
  templateUrl: './rx-list-container.component.html',
  styleUrls: ['./rx-list-container.component.scss']
})
export class RxListContainerComponent implements OnDestroy {
  list: ListElement[] = [];

  private _destroy$ = new Subject<void>();

  constructor(private listService: ListService) {
    this.listService.initList("Rx list");
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
