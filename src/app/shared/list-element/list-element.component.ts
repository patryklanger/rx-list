import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { ListElement } from './list-element.model';
import { ListService } from '../services/list.service';

const NAME_KEBAB = 'app-list-element'

@Component({
  selector: NAME_KEBAB,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: NAME_KEBAB,
    "[class.app-list-element--auto-size]": "autoSize",
    "[class.app-list-element--checked]": "checked"
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
  @Input() element: ListElement | undefined;
  @Input() autoSize: boolean = false;

  checked: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private listService: ListService
  ) {
  }

  onCheckboxChange(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.cdr.markForCheck();
  }

  delete() {
    this.listService.deleteElement(this.element!.id);
  }
}
