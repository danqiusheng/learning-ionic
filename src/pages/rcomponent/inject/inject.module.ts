import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InjectPage } from './inject';

@NgModule({
  declarations: [
    InjectPage,
  ],
  imports: [
    IonicPageModule.forChild(InjectPage),
  ],
})
export class InjectPageModule {}
