import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private httpClient: HttpClient) { }

  getRemoteData(): Observable<any> {
    return this.httpClient.get('assets/jsons/data.json').pipe(map(res => {
      return res;
    }));
  }
}
