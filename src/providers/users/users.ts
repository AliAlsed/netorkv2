import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  fireuser = firebase.database().ref('mikrotik');
  firecisco = firebase.database().ref('cisco');
  constructor(public afauth:AngularFireAuth,public db:AngularFireDatabase) {
  }
  read(node):firebase.database.Reference{
    return this.fireuser.child(`${node}`);
  }
  readcisco(page):firebase.database.Reference{
    return this.firecisco.child(`${page}`);
  }
  readm(path):firebase.database.Reference{
    return firebase.database().ref(`${path}`);
  }
   Register(name,email,pass):Promise<any>{
    return  this.afauth.auth.createUserWithEmailAndPassword(email, pass).then(()=>{
      this.db.database.ref('users').push({
        Name:name,
        Email:email
      });
    });
  }
   Login(email,pass):Promise<any>{
    return this.afauth.auth.signInWithEmailAndPassword(email, pass);

  }
  feed(name,comment){
    return this.db.database.ref('feedback').push({
      Name:name,
      Comment:comment
    });
  }
  


}
