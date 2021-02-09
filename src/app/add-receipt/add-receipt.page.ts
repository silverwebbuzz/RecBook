import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private router: Router) { }

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

  addItem(){
    this.router.navigate(['/add-item']);
  }

}
