import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsPage } from './forms';

@NgModule({
  declarations: [
    FormsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormsPage),
  ],
})
export class FormsPageModule {}
