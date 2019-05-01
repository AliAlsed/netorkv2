import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { MikrotikdetailPage } from '../mikrotikdetail/mikrotikdetail';

/**
 * Generated class for the SwitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-switch',
  templateUrl: 'switch.html',
})
export class SwitchPage {
page:any;
pages:any;
path:any;
arr:any;
searchstring:any;
filteredusers:any;
hide = false;
switching="";
commands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:UsersProvider) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('pages') !=null)
    {
      this.page=`Switching`
      this.pages=[];
      this.pages.push(this.navParams.get('pages'));
    }
    else{
    this.pages=[];
    this.page=this.navParams.get('page');
    console.log(this.page);
    if(this.page =="Switching"){
      this.path="Switching"
      this.pages.push('ACL : Access Control List');
      this.pages.push('DHCP : Dynamic Host Configuration Protocol');
      this.pages.push('DTP : (Dynamic trunk protocol )');
      this.pages.push('Etherchannel');
      this.pages.push('NAT : Network Address Translation');
      this.pages.push('Port security');
      this.pages.push('STP : Spanning Tree Protocol');
      this.pages.push('Sub interface');
      this.pages.push('VLAN : Virtual LAN');
      this.pages.push('Vtp : (virtual trunk protocol )');
      this.pages.push('GRE : Generic Routing Encapsulation');
      this.pages.push('HSRP : Hot standby routing protocol');
      this.pages.push('telnet on router');
      this.pages.push('telnet on switch');
      this.pages.push('AAA : Authentication, authorization, accounting');
      this.pages.push('SSH : Secure Shell');
      this.pages.push('NTP : Network time protocol');
      this.pages.push('Cisco password Recovery');
      this.pages.push('TFTP server : Text file transfer protocol');
      this.pages.push('FTP : File Transfer Protocol');
      this.pages.push('BGP : Border Gateway Protocol');
      this.pages.push('PPPOE : Point to Point Protocol Over Ethernet');
      this.pages.push('Voice');
      this.pages.push('IPv6 : Internet protocol version sex');
      this.pages.push('MLS : Multi-layer switch OR SVI : switch virtual interface');
      this.filteredusers = this.pages;
    }
  } 
  }

  detail(i)
  {
    this.path = `${this.page}/${i}`;
    if(i != "Voice" && i != "Cisco password Recovery" && i != "ACL : Access Control List" && i != "NAT : Network Address Translation" && i != "Cisco password Recovery")
    {
   this.user.readcisco(this.path).child('commands').on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
      if(this.commands !=null){
        this.navCtrl.push(MikrotikdetailPage,{
          'node':i,
          'data':this.commands
          
          //this.arr[1]
  })

    }
  })
     } 
    else if (i == "ACL : Access Control List"){
    this.pages=[];
    this.filteredusers=[];
    //this.hide=true;
    //this.switching="IGP (Interior Gateway Protocol)";
    this.pages.push('Extended');
    this.pages.push('standard');
    this.filteredusers=this.pages;

    this.page=`${this.page}/${i}`;
    this.user.readcisco(this.path).on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
  })
     } 
    else if (i == "NAT : Network Address Translation"){
    
    this.pages=[];
    this.filteredusers=[];
    this.pages.push('PAT (port address translation )');
    this.pages.push('dynamic Nat');
    this.pages.push('static Nat');
    this.filteredusers= this.pages;

    this.page=`${this.page}/${i}`;
    this.user.readcisco(this.path).on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
  })
     } 
    else if (i == "Cisco password Recovery"){
    this.pages=[];
    this.filteredusers=[];
    this.pages.push('Router');
    this.pages.push('Switch');
    this.filteredusers = this.pages;
    this.page=`${this.page}/${i}`;
    this.user.readcisco(this.path).on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
  })
     }
    else if (i == "Voice"){
    this.filteredusers=[];
    this.pages=[];
    this.pages.push('Router');
    this.pages.push('Switch');
    this.filteredusers = this.pages;

    this.page=`${this.page}/${i}`;
    this.user.readcisco(this.path).on("value",snapshot=>{
      
      this.commands=[];
      snapshot.forEach( (snap) =>{
        this.commands.push(snap.val());
        return false;
      });
      console.log( "" +this.path) ;
  })
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
  fill(){
    this.pages=this.filteredusers;
  }
  }
