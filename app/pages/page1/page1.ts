import {Page, NavController} from 'ionic-angular';
// import {ViewPar} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(
    public nav: NavController
  ) {

  }

  goToTab2(){
    //Here, we need to jump up to the parent nav
    //basically the tabs page
    //and call select form the Tabs api
    this.nav.parent.select(1)
  }
}
