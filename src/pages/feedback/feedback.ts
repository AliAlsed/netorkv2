import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyAccountPage } from '../my-account/my-account';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
name="";
comment="";
  constructor(public afauth:AngularFireAuth,public navCtrl: NavController,public _UsersProvider:UsersProvider,public navParams: NavParams, public alert:AlertController) {
  }

  ionViewDidLoad() {
    let currentuser = this.afauth.auth.currentUser;
    if(currentuser ==null || currentuser ==undefined){
      this.navCtrl.setRoot(MyAccountPage);
    } else{
      console.log(currentuser);
    }
  }
  add(){
    if(this.name.trim() ==='' || this.comment.trim() ===''){
      let alert = this.alert.create({
        subTitle:" قم بملء البيانات بشكل صحيح",
        cssClass:"alert",
        buttons:["حسنا"]
      });
      return alert.present();
    } else{
      this._UsersProvider.feed(this.name,this.comment).then(()=>{
        let alert = this.alert.create({
          subTitle:" شكرا لتقيمنا ",
          cssClass:"alert",
          buttons:["حسنا"]
        });
        this.name="";
        this.comment="";
        return alert.present();
      },(err)=>{
        console.log(err);
      })
    }
  }
}
