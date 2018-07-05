// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// This Module's Components
import { ActivitiesComponent } from './activities.component';
import { WalksComponent } from './walks/walks.component';
import { ActivitiesServices } from '../../shared/services/activites.services';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ActivitiesComponent,
        WalksComponent
    ],
    exports: [
        ActivitiesComponent,
    ], providers: [ActivitiesServices],
})
export class ActivitiesModule {

}
