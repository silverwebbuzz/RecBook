import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ResetPage } from './reset/reset.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // @ViewChild(Nav,null) navChild:Nav;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _platform: Platform,
    private deeplinks: Deeplinks
  ) {
    this.initializeApp();
    this.ionViewWillEnter();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();  
      },3000);
    });
  }
  
  ionViewWillEnter(){
  this.deeplinks.route({
     '/reset': ResetPage,
     
   }).subscribe(match => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log('Successfully matched route', match);
   }, nomatch => {
     // nomatch.$link - the full link data
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
}
}
