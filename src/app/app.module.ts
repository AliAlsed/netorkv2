import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { CcnaPage } from '../pages/ccna/ccna';
import { AboutPage } from '../pages/about/about';
import { FeedbackPage } from '../pages/feedback/feedback';
import { MikrotikPage } from '../pages/mikrotik/mikrotik';
import { MyAccountPage } from '../pages/my-account/my-account';
import { SearchPage } from '../pages/search/search';
import { TeamPage } from '../pages/team/team';
import { CommandsProvider } from '../providers/commands/commands';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { UsersProvider } from '../providers/users/users';
import { MikrotikdetailPage } from '../pages/mikrotikdetail/mikrotikdetail';
import { CiscoPage } from '../pages/cisco/cisco';
import { SwitchPage } from '../pages/switch/switch';
import { RegisterPage } from '../pages/register/register';
import { SplashPage } from '../pages/slpash/slpash';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyBC8zkp4xwQz9M39Pw4ViFBY6WL__LdhBQ",
  authDomain: "networkiq-71773.firebaseapp.com",
  databaseURL: "https://networkiq-71773.firebaseio.com",
  projectId: "networkiq-71773",
  storageBucket: "networkiq-71773.appspot.com",
  messagingSenderId: "77197213439"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CcnaPage,
    AboutPage,
    FeedbackPage,
    CiscoPage,
    MikrotikPage,
    MikrotikdetailPage,
    MyAccountPage,
    SplashPage,
    SearchPage,
    RegisterPage,
    SwitchPage,
    TeamPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CcnaPage,
    CiscoPage,
    AboutPage,
    FeedbackPage,
    MikrotikPage,
    RegisterPage,
    SplashPage,
    MyAccountPage,
    MikrotikdetailPage,
    SearchPage,
    SwitchPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommandsProvider,
    SplashScreen,
    UsersProvider
  ]
})
export class AppModule {}


/*
    apiKey: "AIzaSyBQ6hK0YTIf4cXdkDQue8Q7qDBNsE9QMZQ",
    authDomain: "network-8136a.firebaseapp.com",
    databaseURL: "https://network-8136a.firebaseio.com",
    projectId: "network-8136a",
    storageBucket: "network-8136a.appspot.com",
    messagingSenderId: "399115352231"
*/
