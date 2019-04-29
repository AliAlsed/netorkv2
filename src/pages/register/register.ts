import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { MikrotikPage } from '../mikrotik/mikrotik';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
    name="";
    email="";
    pass="";
    confpass="";
  
  constructor(public app:App,public navCtrl: NavController, public _UsersProvider:UsersProvider, public navParams: NavParams, public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  reg(){
    if(this.name.trim() ==='' || this.email.trim() ==='' || this.pass.trim() ==='' || this.pass.length <=5 || this.confpass != this.pass){
      let alert = this.alert.create({
        subTitle:" قم بملء البيانات بشكل صحيح",
        cssClass:"alert",
        buttons:["حسنا"]
      });
      return alert.present();
    } else{
      this._UsersProvider.Register(this.name,this.email,this.pass).then(()=>{
        
        let alert = this.alert.create({
          subTitle:" تمت عمليه التسجيل بنجاح",
          cssClass:"alert",
          buttons:["حسنا"]
        });
        alert.present();
        this.app.getRootNav().setRoot(MikrotikPage);

      },(err)=>{
      });
    }
  }
  log(){
    
  }

}
