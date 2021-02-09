import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// import { NgProgressModule } from "ngx-progressbar";
import { NgProgressModule } from '@ngx-progressbar/core'
import { HttpClientModule } from '@angular/common/http';
import { OCR } from '@ionic-native/ocr/ngx';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { Deeplinks } from '@ionic-native/deeplinks/ngx';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("62953192951-kf0k1hvfct0eidk6emgote81516v7rn3.apps.googleusercontent.com")
  },
 
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,SocialLoginModule,
  //   NgProgressModule.withConfig({
  //   spinnerPosition: "left",
  //   color: "#f71cff"
  // }),
NgProgressModule,
],
  providers: [
    OCR,
    Deeplinks,
    StatusBar,
    SplashScreen,
    { 
      provide: AuthServiceConfig,
      useFactory: provideConfig
      // provide:  RouteReuseStrategy, useClass: IonicRouteStrategy,
      // // provide: AuthServiceConfig,
      // useFactory: provideConfig
    },
   
    Camera,
    TextToSpeech,
    NativeStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
