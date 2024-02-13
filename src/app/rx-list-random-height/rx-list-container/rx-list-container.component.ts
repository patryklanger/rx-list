import { Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

import { ListService } from '../../shared/services/list.service';
import { ListElement } from '../../shared/list-element/list-element.model';
import { Subject, tap, takeUntil, Observable } from 'rxjs';
import { RxVirtualScrollViewportComponent } from '@rx-angular/template/experimental/virtual-scrolling';
import { FormControl } from '@angular/forms';
import { ListElementComponent } from 'src/app/shared/list-element/list-element.component';

@Component({
  selector: 'app-rx-list-container',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-rx-list-container' },
  templateUrl: './rx-list-container.component.html',
  styleUrls: ['./rx-list-container.component.scss']
})
export class RxListContainerComponent implements OnInit, OnDestroy {

  @ViewChild(RxVirtualScrollViewportComponent, { static: true }) viewport!: RxVirtualScrollViewportComponent;

  @ViewChildren(ListElementComponent) listElements: QueryList<ListElementComponent> | undefined;

  list: ListElement[] = [];
  offset: number = 0;

  readonly formControl = new FormControl<number | null>(null);

  private _destroy$ = new Subject<void>();

  constructor(private listService: ListService) {
    this.listService.initList("Rx autosize list", true);
  }

  ngOnInit(): void {
    const list$ = this.listService.list$.pipe(
      tap(list => this.list = list),
      takeUntil(this._destroy$)
    );

    const offset$ = this.viewport.scrolledIndexChange.pipe(
      tap((offset) => this.offset = offset),
      takeUntil(this._destroy$)
    );

    [
      list$,
      offset$
    ].forEach((x: Observable<unknown>) => x.subscribe());
  }

  scrollTo() {
    const index = this.formControl.value;
    if (index === null) {
      return;
    }

    this.viewport.scrollToIndex(index);
    this.formControl.setValue(null);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
