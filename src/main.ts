import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GoodDataAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(GoodDataAppComponent, [
    HTTP_PROVIDERS
]);

