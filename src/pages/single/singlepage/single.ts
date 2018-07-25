import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, NavPush} from 'ionic-angular';
import {PushsinglePage} from "../pushsingle/pushsingle";
import {SetrsinglePage} from "../setrsingle/setrsingle";
import {NavpushPage} from "../navpush/navpush";

/**
 * Generated class for the SinglepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
  providers:[NavPush]
})
export class SinglePage {
 navPush;
 params = { id: 1 };
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navPush = 'NavpushPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglepagePage');
  }

  openPushPage(){
    this.navCtrl.push('PushsinglePage',{test: 'my god'});
  }

  openStrPage(){
    this.navCtrl.setRoot('SetrsinglePage',{title:'test the param'})
  }

}
