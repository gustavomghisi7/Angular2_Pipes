import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    /*
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
    */
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [ SettingsService ],
      useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
