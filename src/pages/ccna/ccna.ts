import { CiscoPage } from './../cisco/cisco';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CcnaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-ccna',
  templateUrl: 'ccna.html',
})
export class CcnaPage {
  ccna:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ccna=[];
    this.ccna.push('Routing');
    this.ccna.push('Switching');
  }
  detail(i){
    return this.navCtrl.push(CiscoPage,{'page':i});
  }
}
