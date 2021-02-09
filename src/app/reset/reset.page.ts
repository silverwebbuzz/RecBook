import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { PasswordValidation } from '../global/password_validation';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  reset_form: FormGroup;
  res_process: boolean;
  id: string;
  reset_token: any;
  userid: any;

  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    public route: ActivatedRoute,
    private api: CommonService) { 

      this.forgot_fb();
    }

    ionViewWillEnter(){
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#989aa2');
    }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log("token", param.token)
      this.reset_token = param.token;
      this.userid = param.userid;

    });
  }

  forgot_fb(){
    this.reset_form = this.formBuilder.group({
      new_password: [null, Validators.required],
      confirm_password:  [null, Validators.required],
    },{
      validator: PasswordValidation.ResetPassword // your custom validation method  
    });
  }

  forgot(){
    for (let v in this.reset_form.controls) {
      this.reset_form.controls[v].markAsTouched();
    }
    if(this.reset_form.valid){
      this.api.presentLoading();
      this.res_process = true;
      var body= {
        userid:this.userid,
        token: this.reset_token,
        new_password: this.reset_form.value.new_password,
        confirm_password: this.reset_form.value.confirm_password,
      };

      this.api.reset(body).subscribe(val => {
        this.res_process = false;
        this.api.dismissLoading();
        if (val) {
          this.api.presentToastWithOptions(val['message']);
          this.router.navigate(['/signin']);
        } else {
          this.api.presentToastWithOptions(val['message']);
        }
      },
        err => {
          this.res_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
