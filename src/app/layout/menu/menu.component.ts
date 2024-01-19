import { Component, ViewEncapsulation } from '@angular/core';

const NAME_KEBAB = 'app-menu'

@Component({
  selector: NAME_KEBAB,
  host: { class: NAME_KEBAB },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}
