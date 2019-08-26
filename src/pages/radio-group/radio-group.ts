import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-radio-group',
  templateUrl: 'radio-group.html',
})
export class RadioGroupPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioGroupPage');
  }
  public irRadio() {
    this.navCtrl.push('RadioSabadoPage');
  }
}
