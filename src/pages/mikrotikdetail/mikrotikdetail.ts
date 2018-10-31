import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MikrotikdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mikrotikdetail',
  templateUrl: 'mikrotikdetail.html',
})
export class MikrotikdetailPage {
title:any;
sub:any;
list:any;
command:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.title=this.navParams.get('node');
    this.sub=this.navParams.get('title');
    this.list=[];
    this.command=[];
    this.list.push(this.navParams.get('data'));
    this.list[0].forEach(element => {
      this.command.push(element);
    });
    console.log(this.list[0]);
  }

}
