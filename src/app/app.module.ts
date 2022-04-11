import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderTitleComponent } from './header-title/header-title.component';
import { ContentCompanyValuesComponent } from './content-company-values/content-company-values.component';
import { SelectorLanguageComponent } from './selector-language/selector-language.component';
import { ContentApplicationsComponent } from './content-applications/content-applications.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { HeaderComponent } from './header/header.component';
import { ContentPartnersComponent } from './content-partners/content-partners.component';

export function httpTranslateLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    ContentCompanyValuesComponent,
    SelectorLanguageComponent,
    ContentApplicationsComponent,
    SidebarContactComponent,
    HeaderComponent,
    ContentPartnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader : {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
