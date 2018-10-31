import { MikrotikdetailPage } from './../mikrotikdetail/mikrotikdetail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the MikrotikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mikrotik',
  templateUrl: 'mikrotik.html',
})
export class MikrotikPage {
  list:any;
  commands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public user:UsersProvider) {
  }

  ionViewDidLoad() {
    this.list=[];
    this.list.push('Interface');
    this.list.push('Setup VLAN');
    this.list.push('System');
    this.list.push('Bridge setup');
    this.list.push('Create a name for network card (interface)');
    this.list.push('Assign ip address to network card (interface)');
    this.list.push('Create NAT rule');
    this.list.push('Assign gateway');
    this.list.push('Assign DNS');
    this.list.push('Create DHCP_server');
    this.list.push('Create DHCP_client');
    this.list.push('Create login page(Hotspot)');

    console.log('ionViewDidLoad MikrotikPage');
  }

  detail(node){
    this.user.read(node).on("value",snapshot=>{
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log(this.commands);
      if(this.commands !=null){
        this.navCtrl.push(MikrotikdetailPage,{'node':node,'data':this.commands});
      }
    });
  }

}
