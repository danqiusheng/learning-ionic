import {Component} from '@angular/core';
import {Events, IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {


  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  gotoPrevious(): void {
    this.navCtrl.pop();
  }

  gotoNext(): void {
    this.navCtrl.push('NextPage');
  }


}
