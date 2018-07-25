import { Component } from '@angular/core';
import {Events, IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FormsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {


  constructor(public navCtrl: NavController,  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }


}
