import { MikrotikPage } from './../mikrotik/mikrotik';
import { MyAccountPage } from './../my-account/my-account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the SlpashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slpash',
  templateUrl: 'slpash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth : AngularFireAuth) {


  }

  ionViewDidLoad() {
    setTimeout(() => {
      var check = this.auth.authState.subscribe(user => {

        console.log(user)
  
        if(user != undefined){
       
            this.navCtrl.setRoot(MikrotikPage);
            this.navCtrl.goToRoot;
    
        }
        if(user == undefined){
          this.navCtrl.setRoot(MyAccountPage);
          this.navCtrl.goToRoot;
        }
      })
    }, 3000);

  }

  ngOnInit(){
    }


}
/*














*/