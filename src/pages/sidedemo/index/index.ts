import {Component, OnInit, ViewChild} from "@angular/core";
import {IonicPage, Nav, NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {ListPage} from "../list/list";

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
// 这个主要作为Module进行加载
export class IndexPage implements OnInit {
  @ViewChild('content') nav: NavController;

  homePage: any = 'HomePage';
  listPage: any = 'ListPage';

  pages: Array<{ title: string, component: any }> = [
    {title: 'Home', component: 'HomePage'},
    {title: 'List', component: 'ListPage'}
    ];

  openPage(page) {
      this.nav.setRoot(page.component);
  }

  constructor( private navCtrl: NavController,) {
  }

  ngOnInit(): void {
  }


}
