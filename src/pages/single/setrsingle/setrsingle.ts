import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SetrsinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setrsingle',
  templateUrl: 'setrsingle.html',
})
export class SetrsinglePage {

  title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.title = this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetrsinglePage');
  }

  openNextPage(): void {
      this.navCtrl.setRoot('SinglePage')
  }

}
