import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  forgot_form: FormGroup;
  forgot_process: boolean;

  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    private api: CommonService) {

    this.forgot_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  ngOnInit() {
  }

  forgot_fb() {
    this.forgot_form = this.formBuilder.group({
      email: [null, Validators.required],
    });
  }

  forgot() {
    for (let v in this.forgot_form.controls) {
      this.forgot_form.controls[v].markAsTouched();
    }
    if (this.forgot_form.valid) {
      this.api.presentLoading();
      this.forgot_process = true;
      var body = {
        Email: this.forgot_form.value.email,
      };
      this.api.forgot(body).subscribe(val => {
        this.forgot_process = false;
        this.api.dismissLoading();
        if (val) {
          this.api.presentToastWithOptions(val['message']);
          this.router.navigate(['/signin']);
        } else {
          this.api.presentToastWithOptions(val['message']);
        }
      },
        err => {
          this.forgot_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
