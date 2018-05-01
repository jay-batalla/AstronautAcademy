import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import {LocateControl } from 'leaflet.locatecontrol';

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
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { MissionsPage } from '../pages/missions/missions';
import { LoginDataProvider } from '../providers/login-data/login-data';
import { Missions2Page } from '../pages/missions/missions2';
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
    MissionsPage,
    Missions2Page,
    ProgressBarComponent,
    LeaderboardPage,
    ProgressPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    MissionsPage,
    Missions2Page,
    LeaderboardPage,
    ProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataProvider2,
    LoginDataProvider
  ]
})
export class AppModule {}
