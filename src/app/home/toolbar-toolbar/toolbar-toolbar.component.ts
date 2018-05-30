import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    selector: 'toolbar-toolbar',
    templateUrl: 'toolbar-toolbar.component.html',
    styleUrls: ['toolbar-toolbar.component.scss']
})
export class ToolbarToolbarComponent   {
    public href: String = '';

    constructor(private translate: TranslateService,
        router: Router) {
              }

      switchLanguage(language: string) {
        this.translate.use(language);
    }

}
