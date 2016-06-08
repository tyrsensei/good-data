import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'good-data-app',
  templateUrl: 'good-data.component.html',
  styleUrls: ['good-data.component.css'],
  directives: [MdIcon],
  providers: [MdIconRegistry]
})
export class GoodDataAppComponent {
  title = 'good-data works!';
}
