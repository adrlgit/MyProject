import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  FabContainer,
} from 'ionic-angular';

/**
 * Generated class for the FabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html',
})
export class FabsPage {
  array: number[] = [];
  icones: boolean = true;

  add() {
    this.array.push(1);
  }

  clickMainFAB() {
    console.log('Clicked open social menu');
  }

  openSocial(netWork: string, fab: FabContainer) {
    console.log('Shared in' + netWork);
    fab.close();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabsPage');
  }

  exibeOcultaIcones() {
    this.icones = !this.icones;
  }
}
