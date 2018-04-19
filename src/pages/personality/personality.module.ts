import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalityPage } from './personality';

@NgModule({
  declarations: [
    PersonalityPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalityPage),
  ],
})
export class PersonalityPageModule {}
