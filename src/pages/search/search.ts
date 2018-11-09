import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommandsProvider } from '../../providers/commands/commands';
import { MikrotikPage } from '../mikrotik/mikrotik';
import { CiscoPage } from '../cisco/cisco';
import { SwitchPage } from '../switch/switch';

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
    this.list=[];
    this.filteredusers=[];
    this.http.getMCommand().subscribe((data:any)=>{
      data.forEach(element => {
        this.list.push(element);
        this.filteredusers.push(element);
      });
      
    })
  }
  searchcommand(searchbar){
    this.list=this.filteredusers;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }
    this.list = this.list.filter((v) => {
      if (v.node.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
  goto(item,type)
  {
    if(type == 'mikrotik')
    {
     return this.navCtrl.push(MikrotikPage,{'pages':item});
    }
    else if(type == 'Routing')
    {
      return this.navCtrl.push(CiscoPage,{'pages':item});
    }
    else if(type == 'Switching')
    {
      return this.navCtrl.push(SwitchPage,{'pages':item});
    }
  }
  fill(){
    this.list=this.filteredusers;
  }

}
