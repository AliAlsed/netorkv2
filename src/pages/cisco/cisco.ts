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
hide = false;
Routing="";
commands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:UsersProvider) {
  }

  ionViewDidLoad() {
    this.pages=[];
    this.page=this.navParams.get('page');
    console.log(this.page);
    if(this.page =="Routing"){
      this.path="Routing"
      this.pages.push('ConfigrationModeRouter(config)');
      this.pages.push('PRIVILEGE MODE');
      this.pages.push('Routing protocols');
      this.pages.push('UserMoode');
    }
  }
  detail(i){
    this.path = `${this.page}/${i}`;
    if(i != "Routing protocols"){
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
    this.pages=[];
    this.hide=true;
    this.Routing="IGP (Interior Gateway Protocol)";
    this.pages.push('Dynamic Route');
    this.pages.push('Dynamic Route - OSPF Protocol');
    this.pages.push('Dynamic Route - RIP Protocol');
    this.pages.push('Dynamic Route EIGRP Protocol');
    this.pages.push('Static Route');
    this.page=`${this.page}/${i}/IGP (Interior Gateway Protocol)`;
  } 

}


}
