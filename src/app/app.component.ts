import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from './../pages/about/about';
import { TeamPage } from './../pages/team/team';
import { MyAccountPage } from './../pages/my-account/my-account';
import { CcnaPage } from './../pages/ccna/ccna';
import { MikrotikPage } from './../pages/mikrotik/mikrotik';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SearchPage } from '../pages/search/search';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SplashPage } from '../pages/slpash/slpash';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = SplashPage ;
  activePage:any;
  inactive:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
   private Splashscreen:SplashScreen,
      public afauth:AngularFireAuth) {
    this.initializeApp();
      this.pages = [
        { title: 'MikroTik Commands', component: MikrotikPage },
        { title: 'CCNA 200 - 125 Commands', component: CcnaPage },
        { title: 'Search', component: SearchPage },
        { title: 'Feedback', component: FeedbackPage },
        { title: 'Our Team', component: TeamPage },
        { title: 'About', component: AboutPage },
      ];
    // used for an example of ngFor and navigation

    this.activePage=this.pages[0];
    
  } 



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();     
      this.Splashscreen.hide();
    });
  }

  check(p){
    return p == this.activePage;
  }
  logout(){
    this.afauth.auth.signOut().then(()=>{
      this.nav.setRoot(MyAccountPage);
    })
  }
  checkm(p){
    let m=false;
     if(p != this.activePage){
       m=true;
     }
     return m;
     
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage=page;
  }
}
