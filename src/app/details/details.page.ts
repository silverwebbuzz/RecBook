import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  back(){
    this.navCtrl.pop();
  }

  async shareActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      header: 'Share',
      buttons: [{
        text: 'PDF',
        icon: 'document-text',
        handler: () => {
          console.log('PDF clicked');
        }
      }, {
        text: 'CSV',
        icon: 'document',
        handler: () => {
          console.log('CSV clicked');
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
