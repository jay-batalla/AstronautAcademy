import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizStartPage } from './quiz-start';

@NgModule({
  declarations: [
    QuizStartPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizStartPage),
  ],
})
export class QuizStartPageModule {}
