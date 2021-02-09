import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer ' + localStorage.getItem('token'),
  responseType: 'JSON'})
};



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  authenticationState = new BehaviorSubject(false);

  isLoading = false;
  isModalOpen = false;
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController) { }

  async presentToastWithOptions(message?, cssClass?, position?) {
    console.log("test")
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  // api call
  signin(body) {
    return this.http.post(environment.base_url + 'login/authenticate', body)
  }

  signup(body) {
      return this.http.post(environment.base_url + 'user/add_user', body)
  }

  profileDetail(body){
   
    return this.http.get<any>(environment.base_url + 'user/get_userby_id/'+body , httpOptions);
  }

  updateUser(data){
    return this.http.put<any>(environment.base_url + 'user/update_user',data , httpOptions);
  }

  forgot(data){
    return this.http.post<any>(environment.base_url + 'login/forgotpasswordlinkgenerate', data);
  }

 
  reset(data){
    return this.http.post<any>(environment.base_url + 'login/resetpassword',data);
  }

  logout(data){
    return this.http.post<any>(environment.base_url + 'login/logout',data,httpOptions);
  }
  

}
