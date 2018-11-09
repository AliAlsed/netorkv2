import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the CommandsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommandsProvider {

  constructor(public http: Http) {
    
  }

  getMCommand(){
    return this.http.get('/assets/data.json')
    .map(response => response.json());
  }
}
