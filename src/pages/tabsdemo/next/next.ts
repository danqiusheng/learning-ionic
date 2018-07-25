import {Component} from '@angular/core';
import {Events, IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {


  constructor(public navCtrl: NavController, ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');

  }

  gotoPrevious():void{
    this.navCtrl.pop();
  }


}
