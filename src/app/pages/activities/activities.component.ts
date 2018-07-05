import { Component, OnInit } from '@angular/core';
import { ActivitiesServices } from '../../shared/services/activites.services';
import { Programme } from '../../shared/model/programme';

@Component({
    selector: 'activities',
    templateUrl: 'activities.component.html',
    styleUrls: ['activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  agenda: Programme[];
    constructor(private activitiesServices: ActivitiesServices) { }

    ngOnInit() {

        this.activitiesServices.getData()
        .then(result => {
            console.log(result);
            this.agenda = result;

     }
}
