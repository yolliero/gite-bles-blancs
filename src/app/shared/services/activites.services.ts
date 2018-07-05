import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ActivitiesServices {
    constructor(private http: HttpClient) { }

 private url  = 'http://datarmor.cotesdarmor.fr:80/dataserver/cg22/data/AGENDA?&$format=json';



public  getData(): Promise<any> {
    return  this.http.get( this.url)
            .toPromise()
            .then(response => {
              return response.d.results;
          });


}
}