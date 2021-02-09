import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

  isserachOpen: boolean = false;
  constructor(public actionSheetCtrl: ActionSheetController,
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  OpenSearch(){
    this.isserachOpen = !this.isserachOpen;
  }

  details(){
    this.router.navigate(['/details']);
  }

  addReceipt(){
    this.router.navigate(['/add-receipt']);
  }

  preview(){
    this.router.navigate(['/preview']);
  }

  back(){
    this.navCtrl.pop();
  }

  async filterActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      header: 'Filter',
      buttons: [{
        text: 'Scan',
        icon: 'scan',
        handler: () => {
          console.log('Scan clicked');
        }
      }, {
        text: 'Email',
        icon: 'mail',
        handler: () => {
          console.log('Email clicked');
        }
      },
       {
        text: 'All',
        icon: 'receipt',
        handler: () => {
          console.log('All clicked');
        }
      }, {
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
