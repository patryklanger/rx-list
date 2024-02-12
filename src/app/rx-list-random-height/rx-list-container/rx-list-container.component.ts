import { Component } from '@angular/core';

import { ListService } from '../../shared/services/list.service';
import { ListElement } from '../../shared/list-element/list-element.model';

@Component({
  selector: 'app-rx-list-container',
  templateUrl: './rx-list-container.component.html',
  styleUrls: ['./rx-list-container.component.scss']
})
export class RxListContainerComponent {
  list: ListElement[] = this.listService.getList$(true);

  constructor(private listService: ListService) { }
}
