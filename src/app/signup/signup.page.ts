import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';
import { PasswordValidation } from '../global/password_validation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  reg_form: FormGroup;
  reg_process: boolean;

  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router, private api: CommonService) {

    this.reg_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  ngOnInit() {
  }

  reg_fb() {
    this.reg_form = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      phone_number: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
    }, {
      validator: PasswordValidation.MatchPassword // your custom validation method  
    });
  }

  signup() {
    for (let v in this.reg_form.controls) {
      this.reg_form.controls[v].markAsTouched();
    }
    if (this.reg_form.valid) {
      this.api.presentLoading();
      this.reg_process = true;
      var body = {
        UserName: this.reg_form.value.username,
        Email: this.reg_form.value.email,
        PhoneNumber: this.reg_form.value.phone_number,
        Password: this.reg_form.value.password,
        Authentication_Provider: "Site",
        Status: "1"
      };
      this.api.signup(body).subscribe(val => {
        this.reg_process = false;
        this.api.dismissLoading();
        if (val['status'] == 200) {
          this.api.presentToastWithOptions(val['message']);
          this.router.navigate(['/signin']);
        }
        else {
          if (val == "email") {
            this.reg_form.controls['email'].setErrors({ 'incorrect': true });
            this.reg_form.controls['email'].markAsTouched();
          } else {
            this.reg_form.controls['email'].setErrors({ 'incorrect': true });
            this.reg_form.controls['email'].markAsTouched();
          }
          this.api.presentToastWithOptions('error', val['message']);
        }
      },
        err => {
          this.reg_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      )
    }
  }

  signin() {
    this.router.navigate(['/signin'])
  }
}
