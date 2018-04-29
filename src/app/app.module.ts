import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { MissionsPage } from '../pages/missions/missions';

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
    MissionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    MissionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
