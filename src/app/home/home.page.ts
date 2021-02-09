import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { CommonService } from '../global/common_service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: string;

  constructor(private statusBar: StatusBar,
    private router: Router,
    public alertCtrl: AlertController, private menuCtrl: MenuController,private api: CommonService) { 
      this.id = localStorage.getItem("id")
    }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  receipts() {
    this.router.navigate(['/receipts']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  emailScan(){
    // this.router.navigate(['/email-scan']);
    console.log('Scanned Email Receipts');
  }

  ocr() {
    this.router.navigate(['/ocr']);
  }

  async logout() {
    var body = {
      ID:this.id
    };
    this.menuCtrl.close();
    const alert = await this.alertCtrl.create({
      mode: 'md',
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          handler: () => {
            let log = this.api.logout(body);
            if(log){
              localStorage.removeItem("id");
              localStorage.removeItem("token");
              this.router.navigate(['/signin']);
            }
            
            
          }
        }
      ]
    });

    await alert.present();
  }

}
