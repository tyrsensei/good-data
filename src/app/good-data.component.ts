import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'good-data-app',
  templateUrl: 'good-data.component.html',
  styleUrls: ['good-data.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon, Dragula],
  providers: [MdIconRegistry],
  viewProviders: [DragulaService]
})
export class GoodDataAppComponent {
  appTitle = 'GooDatA';
}
