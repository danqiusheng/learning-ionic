import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-noinject',
  templateUrl: 'noinject.html',
})
export class NoinjectPage {

  @ViewChild('myNav') nav;
  rootPage = 'OthersPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoinjectPage');
  }
  ngAfterViewInit() {
    this.nav.push('HelloPage');
  }
}
