"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var icon_1 = require('@angular2-material/icon');
var card_1 = require('@angular2-material/card');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var core_1 = require('@angular/core');
var GoodDataAppComponent = (function () {
    function GoodDataAppComponent() {
        this.appTitle = 'GooDatA';
    }
    GoodDataAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'good-data-app',
            templateUrl: 'good-data.component.html',
            styleUrls: ['good-data.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, toolbar_1.MD_TOOLBAR_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon, ng2_dragula_1.Dragula],
            providers: [icon_1.MdIconRegistry],
            viewProviders: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [])
    ], GoodDataAppComponent);
    return GoodDataAppComponent;
}());
exports.GoodDataAppComponent = GoodDataAppComponent;
//# sourceMappingURL=good-data.component.js.map