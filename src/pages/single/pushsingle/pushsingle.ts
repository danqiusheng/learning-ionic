import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PushsinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pushsingle',
  templateUrl: 'pushsingle.html',
})
export class PushsinglePage {
  test;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.test = this.navParams.get("test");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushsinglePage');
  }

}
