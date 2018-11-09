import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { MikrotikdetailPage } from '../mikrotikdetail/mikrotikdetail';

/**
 * Generated class for the CiscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cisco',
  templateUrl: 'cisco.html',
})
export class CiscoPage {
page:any;
pages:any;
path:any;
arr:any;
searchstring:any;
filteredusers:any;
hide = false;
Routing="";
commands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:UsersProvider) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('pages') !=null)
    {
      this.pages=[];
      this.page=`Routing`;
      this.pages.push(this.navParams.get('pages'));
      
    }
    else{ 
    this.pages=[];
    this.page=this.navParams.get('page');
    console.log(this.page);
    if(this.page =="Routing"){
      this.path="Routing"
      this.pages.push('ConfigrationModeRouter(config)');
      this.pages.push('PRIVILEGE MODE');
      this.pages.push('Routing protocols');
      this.pages.push('UserMode');
      this.filteredusers = this.pages;
    }
  }
  }
  detail(i){
    this.path = `${this.page}/${i}`;
    if(i != "Routing protocols"){
      console.log(i);
    this.user.readcisco(this.path).child('commands').on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
  })
  this.user.readcisco(this.path).on("value",snapshot=>{
    this.arr=[];
    snapshot.forEach( (snap) =>{
      this.arr.push(snap.val());
      return false;
    });
    console.log(this.arr[1]);
    if(this.commands !=null){
      this.navCtrl.push(MikrotikdetailPage,{
        'node':i,
        'title':this.arr[1],
        'data':this.commands
      })
    }
  })
  } else{
    console.log(i)
    this.pages=[];
    this.filteredusers=[];
    this.hide=true;
    this.Routing="IGP (Interior Gateway Protocol)";
    this.pages.push('Dynamic Route');
    this.pages.push('Dynamic Route - OSPF Protocol');
    this.pages.push('Dynamic Route - RIP Protocol');
    this.pages.push('Dynamic Route EIGRP Protocol');
    this.pages.push('Static Route');
    this.filteredusers=this.pages;
    this.page=`${this.page}/${i}/IGP (Interior Gateway Protocol)`;
  } 

}

searchcommand(searchbar){
  this.pages=this.filteredusers;
  var q = searchbar.target.value;
  if (q.trim() == '') {
    return;
  }
  return this.pages = this.pages.filter((v) => {
    if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
      return true;
    }
    return false;
  })
}


}
