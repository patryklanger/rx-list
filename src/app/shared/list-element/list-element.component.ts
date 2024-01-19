import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ListElement } from './list-element.model';

const NAME_KEBAB = 'app-list-element'

@Component({
  selector: NAME_KEBAB,
  encapsulation: ViewEncapsulation.None,
  host: { class: NAME_KEBAB },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
  @Input() element: ListElement | undefined;
}
