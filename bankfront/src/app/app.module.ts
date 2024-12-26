import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessageService} from "primeng/api";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import {KnobModule} from "primeng/knob";
import {ChartModule} from "primeng/chart";
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeFr);


@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
        AppRoutingModule,
        FormsModule,
        KnobModule,
        ChartModule,
        TableModule,
        ToastModule
    ],
    providers: [
        {
            provide: LOCALE_ID, useValue: 'fr'
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: MessageService
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
    ],
    bootstrap: [AppComponent],
    exports: [
        AppComponent
    ]
})
export class AppModule { }
