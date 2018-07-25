import {Component, ElementRef, Renderer, Renderer2, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'ContactPage';
  tab3Root: any = 'FormsPage';
  mb: any;
  constructor(private event: Events, private renderer: Renderer2, private elementRef: ElementRef,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    let tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
    this.event.subscribe('hideTabs', () => {
      this.renderer.setStyle(tabs, 'display', 'none');
      let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
      let content = this.queryElement(SelectTab, '.scroll-content');
      this.mb = content.style['margin-bottom'];
      this.renderer.setStyle(content, 'margin-bottom', '0')
    });
    this.event.subscribe('showTabs', () => {
      this.renderer.setStyle(tabs, 'display', '');
      let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
      let content = this.queryElement(SelectTab, '.scroll-content');
      this.renderer.setStyle(content, 'margin-bottom', this.mb)
    })

  }

  queryElement(elem: HTMLElement, q: string): HTMLElement {
    return <HTMLElement>elem.querySelector(q);
  }
}
