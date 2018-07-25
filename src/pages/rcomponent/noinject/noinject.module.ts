import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoinjectPage } from './noinject';

@NgModule({
  declarations: [
    NoinjectPage,
  ],
  imports: [
    IonicPageModule.forChild(NoinjectPage),
  ],
})
export class NoinjectPageModule {}
