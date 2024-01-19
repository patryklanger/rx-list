import { Component, ViewEncapsulation } from '@angular/core';

const NAME_KEBAB = 'app-layout'

@Component({
  selector: NAME_KEBAB,
  host: { class: NAME_KEBAB },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
