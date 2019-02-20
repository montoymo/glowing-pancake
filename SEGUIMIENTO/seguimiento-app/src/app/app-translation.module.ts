import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';

/* export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const translationOptions = {
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
}; */

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/cwe/i18n/', '.json');
}

const TRANSLATE_OPTIONS = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
};

@NgModule({
  imports: [HttpClientModule, TranslateModule.forRoot(TRANSLATE_OPTIONS)],
  exports: [TranslateModule],
  providers: [TranslateService],
})
export class AppTranslationModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }
}
