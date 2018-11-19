import { MikrotikPage } from './../mikrotik/mikrotik';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
 email="";
 pass="";
  constructor(public _UsersProvider:UsersProvider,public navCtrl: NavController, public navParams: NavParams, public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }
  login(){
    if( this.email.trim() ==='' || this.pass.trim() ==='' || this.pass.length <=5){
      let alert = this.alert.create({
        subTitle:" قم بملء البيانات بشكل صحيح",
        cssClass:"alert",
        buttons:["حسنا"]
      });
       alert.present();
    } else{
      this._UsersProvider.Login(this.email,this.pass).then(()=>{
        this.navCtrl.setRoot(MikrotikPage);
      },(err)=>{
        let alert = this.alert.create({
          subTitle: err.toString(),
          cssClass:"alert",
          buttons:["حسنا"]
        });
         alert.present();
      });
    }
  }
  reg(){
   this.navCtrl.push(RegisterPage);
  }

}
