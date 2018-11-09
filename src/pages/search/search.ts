import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommandsProvider } from '../../providers/commands/commands';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  list:any;
  commands:any;
  searchstring:any;
  filteredusers:any;
  constructor(public http:CommandsProvider, public comm:UsersProvider,public navCtrl: NavController, public navParams: NavParams , public user:UsersProvider) {
  }

  ionViewDidLoad() {
    this.http.getMCommand().subscribe((data:any)=>{
      this.list = data;
    })
  }
  searchcommand(searchbar){
    this.list=this.filteredusers;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }
    this.list = this.list.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })

  }
  detail(item){
    this.comm.readm(item).on("value",snapshot=>{
      snapshot.forEach((snap:any)=>{
        console.log("title : "+snap.val().command)
        return false;
      })
    })
  }

}
