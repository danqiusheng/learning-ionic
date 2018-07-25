import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonavPage } from './ionav';

@NgModule({
  declarations: [
    IonavPage,
  ],
  imports: [
    IonicPageModule.forChild(IonavPage),
  ],
})
export class IonavPageModule {}
