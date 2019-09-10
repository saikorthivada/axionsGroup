import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // used for service call's
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private httpClient: HttpClient) { }

  // method for getting data from the data.json file inside assets folder
  getRemoteData(): Observable<any> {
    return this.httpClient.get('assets/jsons/data.json').pipe(map(res => {
      return res; // returning response json object
    }));
  }
}
