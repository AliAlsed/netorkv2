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
import { SplashScreen } from '@ionic-native/splash-screen';
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

export const firebaseConfig = {
  apiKey: "AIzaSyBQ6hK0YTIf4cXdkDQue8Q7qDBNsE9QMZQ",
  authDomain: "network-8136a.firebaseapp.com",
  databaseURL: "https://network-8136a.firebaseio.com",
  projectId: "network-8136a",
  storageBucket: "network-8136a.appspot.com",
  messagingSenderId: "399115352231"
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
    SearchPage,
    TeamPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
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
    MyAccountPage,
    MikrotikdetailPage,
    SearchPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommandsProvider,
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
