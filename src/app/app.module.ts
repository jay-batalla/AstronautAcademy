import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import {LocateControl } from 'leaflet.locatecontrol';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { QuizStartPage } from '../pages/quiz-start/quiz-start';
import { QuizEndPage } from '../pages/quiz-end/quiz-end';
import { PersonalityPage } from '../pages/personality/personality';
import { MapPage } from '../pages/map/map';
import { DataProvider } from '../providers/data/data';
import { DataProvider2 } from '../providers/data/data1';
import { DataProvider3 } from '../providers/data/data2';
import { DataProvider4 } from '../providers/data/data3';
import { DataProvider5 } from '../providers/data/data4';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { Missions0Page } from '../pages/missions/missions0';
import { MissionsPage } from '../pages/missions/missions';
import { Missions2Page } from '../pages/missions/missions2';
import { Missions3Page } from '../pages/missions/missions3';
import { Missions4Page } from '../pages/missions/missions4';
import { Missions5Page } from '../pages/missions/missions5';
import { LoginDataProvider } from '../providers/login-data/login-data';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ProgressPage } from '../pages/progress/progress';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    QuizStartPage,
    QuizEndPage,
    PersonalityPage,
    MapPage,
    FlashCardComponent,
    Missions0Page,
    MissionsPage,
    Missions2Page,
    Missions3Page,
    Missions4Page,
    Missions5Page,
    ProgressBarComponent,
    LeaderboardPage,
    ProgressPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    QuizStartPage,
    QuizEndPage,
    PersonalityPage,
    MapPage,
    Missions0Page,
    MissionsPage,
    Missions2Page,
    Missions3Page,
    Missions4Page,
    Missions5Page,
    LeaderboardPage,
    ProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataProvider2,
    DataProvider3,
    DataProvider4,
    DataProvider5,
    LoginDataProvider,
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
