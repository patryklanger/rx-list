import { Component, OnDestroy } from '@angular/core';

import { ListService } from '../../shared/services/list.service';
import { ListElement } from '../../shared/list-element/list-element.model';
import { Subject, tap, takeUntil, Observable } from 'rxjs';

@Component({
  selector: 'app-rx-list-container',
  templateUrl: './rx-list-container.component.html',
  styleUrls: ['./rx-list-container.component.scss']
})
export class RxListContainerComponent implements OnDestroy {
  list: ListElement[] = [];

  private _destroy$ = new Subject<void>();

  constructor(private listService: ListService) {
    this.listService.initList("Rx autosize list", true);

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
