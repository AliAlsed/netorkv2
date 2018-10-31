import { AboutPage } from './../pages/about/about';
import { TeamPage } from './../pages/team/team';
import { MyAccountPage } from './../pages/my-account/my-account';
import { CcnaPage } from './../pages/ccna/ccna';
import { MikrotikPage } from './../pages/mikrotik/mikrotik';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MikrotikPage;
  activePage:any;
  inactive:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MikroTik Commands', component: MikrotikPage },
      { title: 'CCNA 200 - 125 Commands', component: CcnaPage },
      { title: 'Search', component: SearchPage },
      { title: 'My Account', component: MyAccountPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'Our Team', component: TeamPage },
      { title: 'About', component: AboutPage },
    ];
    this.activePage=this.pages[0];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  check(p){
    return p == this.activePage;
  }
  logout(){

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
