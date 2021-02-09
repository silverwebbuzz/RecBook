import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user_not_found_place_holder = 'assets/images/placeholders.png'
  profile_form: FormGroup;
  pro_process: boolean;
  profileData: any;
  id: string;
  select_product_image: any;
  mediaUrl_image: any = '';


  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private api: CommonService,
    private router: Router) {

    this.profile_fb();
  }

  questionDetails(reqData) {
    this.api.profileDetail(reqData).subscribe(res => {
      this.profileData = res['result'];
      console.log("getdata", this.profileData)
      this.profile_form.patchValue({
        username: this.profileData['UserName'],
        email: this.profileData['Email'],
        phone_number: this.profileData['PhoneNumber'],
        address: this.profileData['Address'],
        country: this.profileData['Country'],
        state: this.profileData['State'],
        city: this.profileData['City'],
        postal_code: this.profileData['PostalCode'],

      });
      this.select_product_image = this.profileData['ProfileUrl'];

    })
  }

  ngOnInit() {
    this.id = localStorage.getItem('id')
    this.questionDetails(this.id);
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#989aa2');
  }

  profile_fb() {
    this.profile_form = this.formBuilder.group({
      username: [null, Validators.required],
      email: [{value : '', disabled : true}, Validators.required],
      phone_number: [null, Validators.required],
      address: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      postal_code: [null, Validators.required],
      image: [null, Validators.required],
    });
  }

  imageUpload(e) {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onloadend = (e: any) => {
          this.select_product_image = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        this.mediaUrl_image = file;
      }   
  }


  submit() {
    for (let v in this.profile_form.controls) {
      this.profile_form.controls[v].markAsTouched();
    }
    if (this.profile_form.valid) {
      this.api.presentLoading();
      this.pro_process = true;
      const body: FormData = new FormData();
      body.append('UserName',this.profile_form.value.username);
      body.append('Email',this.profile_form.value.email);
      body.append('PhoneNumber',this.profile_form.value.phone_number);
      body.append('Address',this.profile_form.value.address);
      body.append('Country',this.profile_form.value.country);
      body.append('State',this.profile_form.value.state);
      body.append('City',this.profile_form.value.city);
      body.append('PostalCode',this.profile_form.value.postal_code);
      body.append('ID',this.id);
      body.append('image',this.mediaUrl_image);
     
      this.api.updateUser(body).subscribe(val => {
        this.pro_process = false;
        this.api.dismissLoading();
        if (val) {

          this.api.presentToastWithOptions(val['message']);
          this.router.navigate(['/home']);

        } else {
          this.api.presentToastWithOptions(val['message']);
        }
      },
        err => {
          this.pro_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
