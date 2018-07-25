import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NavpushPage} from './navpush';

@NgModule({
  declarations: [
    NavpushPage,
  ],
  imports: [
    IonicPageModule.forChild(NavpushPage),
  ],
  entryComponents: [NavpushPage]
})
export class NavpushPageModule {
}
