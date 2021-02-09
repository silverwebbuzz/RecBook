import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage implements OnInit {

  srcImage: any = null;
  OCRAD: any;

  ocrresult: any = null;
  ocrerror: any = null;

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public camera: Camera,
    private statusBar: StatusBar,
    private router: Router,
    private ocr: OCR) { }

    ionViewWillEnter(){
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#989aa2');
    }
  
    back(){
      this.navCtrl.pop();
    }

    scan(){
      this.getPicture(1);
    }

    add(){
      this.router.navigate(['/add-receipt']);
    }

    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        mode: 'md',
        buttons: [
          {
            text: 'Choose Photo',
            handler: () => {
              this.getPicture(0); // 0 == Library
            }
          }, {
            text: 'Take Photo',
            handler: () => {
              this.getPicture(1); // 1 == Camera
            }
          }, 
          // {
          //   text: 'Demo Photo',
          //   handler: () => {
          //     this.srcImage = 'assets/images/keycard.png';
          //   }
          // }, 
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }

    getPicture(sourceType: number) {
      // You can check the values here:
      // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
      this.camera.getPicture({
        quality: 100,
        destinationType: 0, // DATA_URL
        sourceType,
        allowEdit: true,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }).then((imageData) => {
        this.srcImage = imageData;

        this.ocr.recText(OCRSourceType.BASE64, imageData)
          .then((res: OCRResult) => this.ocrresult = JSON.stringify(res))
          .catch((error: any)=> this.ocrerror = JSON.stringify(error));

      }, (err) => {
        console.log(`ERROR -> ${JSON.stringify(err)}`);
      });
    }

    async analyze() {
      let loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      loader.present();
      (<any>window).OCRAD(document.getElementById('image'), text => {
        loader.dismiss();
        alert(text);
        console.log(text);
      });
    }
  
    restart() {
      this.srcImage = '';
      this.presentActionSheet();
    }

  ngOnInit() {
  }

}
