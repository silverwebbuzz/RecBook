import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';
import { AuthService, AuthServiceConfig } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  login_form: FormGroup;
  login_process: boolean;

  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder, private api: CommonService, private router: Router,private authService: AuthService) {

    this.login_fb();
  }

  // login with google api
  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        var body= {
          UserName: userData.name,
          Email: userData.email,
          Authentication_Provider: userData.provider,
          Password:"null",
          ProfileUrl:userData.photoUrl,
          authToken:userData.authToken     
        };   
        this.api.signup(body).subscribe(val=>{
          console.log("token",val)
          this.login_process = false;
          this.api.dismissLoading();
          if(val){    
            this.api.presentLoading();
            this.login_process = true;
            localStorage.setItem('id', val['result']['ID']);
            localStorage.setItem('token', val['result']['token']);
            this.api.presentToastWithOptions(val['message']);
            this.router.navigate(['/home']);
            
          }else{
            this.api.presentToastWithOptions(val['message']);
          }
        },
        err =>{
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
      }
    );
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  ngOnInit() {
  }

  login_fb() {
    this.login_form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {

    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this.api.presentLoading();
      this.login_process = true;

     

      var body = {
        Email: this.login_form.value.email,
        Password: this.login_form.value.password,
        
      };
      this.api.signin(body).subscribe(val => {
        this.login_process = false;
        this.api.dismissLoading();
        if (val) {
          localStorage.setItem('id', val['result']['ID']);
          localStorage.setItem('token', val['result']['token']);
          this.api.presentToastWithOptions(val['message']);
          this.router.navigate(['/home']);

        } else {
          this.api.presentToastWithOptions(val['message']);
        }
      },
        err => {
          this.login_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      )
    }
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  forgot() {
    this.router.navigate(['/forgot']);
  }
}
