import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-selector-language',
  templateUrl: './selector-language.component.html',
  styleUrls: ['./selector-language.component.css']
})
export class SelectorLanguageComponent implements OnInit {
  underline1 = '';
  underline2 = 'underline';
  ngOnInit(): void {
  }

  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(['en','zh-TW']);
    translate.setDefaultLang('zh-TW');
  }

  translateLanguageTo(lang: string){
    this.translate.use(lang);
    if (lang === 'zh-TW'){
      this.underline1 = '';
      this.underline2 = 'underline';
    }
    else{
      this.underline1 = 'underline';
      this.underline2 = '';
    }
  }
}
