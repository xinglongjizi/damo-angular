// main.ts启动应用的地方

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if(environment.production) enableProdMode();

// 启动根模块
platformBrowserDynamic().bootstrapModule(AppModule);

