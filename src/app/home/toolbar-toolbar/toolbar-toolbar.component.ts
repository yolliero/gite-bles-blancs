import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'toolbar-toolbar',
    templateUrl: 'toolbar-toolbar.component.html',
    styleUrls: ['toolbar-toolbar.component.scss']
})
export class ToolbarToolbarComponent {


    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
      }

      switchLanguage(language: string) {
        this.translate.use(language);
    }

}
