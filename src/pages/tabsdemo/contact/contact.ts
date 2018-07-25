import {Component} from '@angular/core';
import {Events, IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController,  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  gotoNext(): void {
    this.navCtrl.push('NextPage');
  }
}
