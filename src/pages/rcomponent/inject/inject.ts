import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inject',
  templateUrl: 'inject.html',
})
export class InjectPage {
  rootPage = 'OthersPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InjectPage');
  }

  ngAfterViewInit() {
    this.navCtrl.push('HelloPage');
  }
}
