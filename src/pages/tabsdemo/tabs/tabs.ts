import {Component, ElementRef, Renderer, Renderer2, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'ContactPage';
  tab3Root: any = 'FormsPage';
  constructor( ) {
  }

  ionViewDidLoad() {


  }

}
