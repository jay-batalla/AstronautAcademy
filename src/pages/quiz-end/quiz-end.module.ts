import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizEndPage } from './quiz-end';

@NgModule({
  declarations: [
    QuizEndPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizEndPage),
  ],
})
export class QuizEndPageModule {}
