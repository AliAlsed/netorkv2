import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  fireuser = firebase.database().ref('mikrotik');
  firecisco = firebase.database().ref('cisco');
  constructor(public db:AngularFireDatabase) {
  }

  



  read(node):firebase.database.Reference{
    return this.fireuser.child(`${node}`);
  }
  readcisco(page):firebase.database.Reference{
    return this.firecisco.child(`${page}`);
  }


}
