import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-life',
  templateUrl: 'life.html',
})
export class LifePage {

  msg = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 页面加载时运行，此事件仅在每个页面创建时发生一次。如果页面离开但被缓存
  // 是放置页面的设置代码的好地方
  ionViewDidLoad() {
    this.msg.push('ionViewDidLoad LifePage');
    console.log('ionViewDidLoad LifePage');
  }

  // 页面将加载时运行
  ionViewWillLoad() {
    this.msg.push('ionViewWillLoad LifePage');
    console.log('ionViewWillLoad LifePage')
  }

  //  当页面即将进入并成为激活页面时运行。
  ionViewWillEnter() {
    this.msg.push('ionViewWillEnter LifePage');
    console.log("ionViewWillEnter LifePage")
  }

  // 当页面已完全输入并且现在是激活页面时运行。
  // 此事件将触发，无论是第一次加载还是缓存页面。
  ionViewDidEnter() {
    this.msg.push('ionViewDidEnter LifePage');
    console.log('ionViewDidEnter LifePage');
  }

// 当页面即将离开并且不再是激活页面时运行
  ionViewWillLeave() {
    this.msg.push('ionViewWillLeave LifePage');
    console.log("ionViewWillLeave LifePage");
  }

// 当页面完成离开时运行，并且不再是激活页面
  ionViewDidLeave() {
    this.msg.push('ionViewDidLeave LifePage');
    console.log("ionViewDidLeave LifePage");
  }

//当页面即将销毁并删除其元素时运行
  ionViewWillUnload() {
    this.msg.push('ionViewWillUnload LifePage');
    console.log("ionViewWillUnload LifePage");
  }

  // 在视图可以进入之前运行。 这可以在认证视图中用作“保护”，您需要在视图输入之前检查权限
  ionViewCanEnter() {
    this.msg.push('ionViewCanEnter LifePage');
    console.log("ionViewCanEnter LifePage");
  }

// 视图可以离开时运行。 这可以在认证视图中用作“守卫”，您需要在视图离开之前检查权限
  ionViewCanLeave(): void {
    this.msg.push('ionViewCanLeave LifePage');
    console.log("ionViewCanLeave LifePage");
    //
    // if(true){
    //   return false;
    // }
  }

}
