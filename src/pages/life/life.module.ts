import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifePage } from './life';

@NgModule({
  declarations: [
    LifePage,
  ],
  imports: [
    IonicPageModule.forChild(LifePage),
  ],
})
export class LifePageModule {}
